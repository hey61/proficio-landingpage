#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import config from "../visibility.config.mjs";

const args = process.argv.slice(2);
const outputIndex = args.indexOf("--output");
const outputPath = outputIndex >= 0 ? args[outputIndex + 1] : undefined;
const buildDir = process.env.VISIBILITY_BUILD_DIR;
const baseUrl = (
  process.env.VISIBILITY_SITE_URL ||
  config.siteUrl
).replace(/\/+$/, "");

const normalizeText = (value = "") =>
  value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();

const firstMatch = (html, pattern) => {
  const match = html.match(pattern);
  return match ? normalizeText(match[1]) : "";
};

const allMatches = (html, pattern) =>
  [...html.matchAll(pattern)].map((match) => normalizeText(match[1]));

const attribute = (tag, name) => {
  const pattern = new RegExp(
    `${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    "i",
  );
  const match = tag.match(pattern);
  return match ? match[1] || match[2] || match[3] || "" : "";
};

const metaContent = (html, selectorName) => {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  const tag = tags.find((candidate) => {
    const name = attribute(candidate, "name").toLowerCase();
    const property = attribute(candidate, "property").toLowerCase();
    return name === selectorName || property === selectorName;
  });
  return tag ? attribute(tag, "content") : "";
};

const linkHref = (html, relName) => {
  const tags = html.match(/<link\b[^>]*>/gi) || [];
  const tag = tags.find((candidate) =>
    attribute(candidate, "rel")
      .toLowerCase()
      .split(/\s+/)
      .includes(relName),
  );
  return tag ? attribute(tag, "href") : "";
};

const internalLinks = (html, pageUrl) => {
  const hrefs = allMatches(html, /<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi);
  const host = new URL(pageUrl).host;
  return [
    ...new Set(
      hrefs
        .map((href) => {
          try {
            return new URL(href, pageUrl);
          } catch {
            return null;
          }
        })
        .filter((url) => url && url.host === host)
        .map((url) => `${url.pathname}${url.search}`),
    ),
  ];
};

const evaluate = ({ page, url, response, html, durationMs }) => {
  const title = firstMatch(html, /<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const description = metaContent(html, "description");
  const robots = metaContent(html, "robots").toLowerCase();
  const canonical = linkHref(html, "canonical");
  const h1s = allMatches(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi);
  const bodyText = normalizeText(
    firstMatch(html, /<body\b[^>]*>([\s\S]*?)<\/body>/i) || html,
  );
  const bodyLower = bodyText.toLowerCase();
  const foundTopics = page.topics.filter((topic) =>
    bodyLower.includes(topic.toLowerCase()),
  );
  const missingTopics = page.topics.filter(
    (topic) => !bodyLower.includes(topic.toLowerCase()),
  );
  const jsonLdCount = (
    html.match(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>/gi,
    ) || []
  ).length;
  const links = internalLinks(html, url);
  const issues = [];

  if (!response.ok) issues.push(`HTTP-Status ${response.status}`);
  if (response.redirected)
    issues.push(`Weiterleitung auf ${response.url}`);
  if (!title) issues.push("Seitentitel fehlt");
  if (title.length > 60)
    issues.push(`Seitentitel ist lang (${title.length} Zeichen)`);
  if (!description) issues.push("Meta-Beschreibung fehlt");
  if (description.length > 165)
    issues.push(`Meta-Beschreibung ist lang (${description.length} Zeichen)`);
  if (robots.includes("noindex")) issues.push("Seite steht auf noindex");
  if (!canonical) issues.push("Canonical-Link fehlt");
  if (h1s.length !== 1)
    issues.push(`${h1s.length} H1-Überschriften statt genau einer`);
  if (bodyText.split(/\s+/).filter(Boolean).length < 250)
    issues.push("Weniger als 250 sichtbare Wörter");
  if (jsonLdCount === 0) issues.push("Keine strukturierten Daten gefunden");
  if (links.length < 3) issues.push("Wenige interne Links");
  if (missingTopics.length)
    issues.push(`Themenbegriffe fehlen: ${missingTopics.join(", ")}`);

  return {
    name: page.name,
    path: page.path,
    requestedUrl: url,
    finalUrl: response.url,
    status: response.status,
    durationMs,
    title,
    description,
    canonical,
    h1s,
    words: bodyText.split(/\s+/).filter(Boolean).length,
    jsonLdCount,
    internalLinkCount: links.length,
    foundTopics,
    missingTopics,
    issues,
  };
};

const auditPage = async (page) => {
  const url = new URL(page.path, `${baseUrl}/`).toString();
  const started = performance.now();

  try {
    if (buildDir) {
      const filename =
        page.path === "/" ? "index.html" : `${page.path.replace(/^\//, "")}.html`;
      const html = await readFile(path.join(buildDir, filename), "utf8");
      return evaluate({
        page,
        url,
        response: {
          ok: true,
          redirected: false,
          status: 200,
          url,
        },
        html,
        durationMs: Math.round(performance.now() - started),
      });
    }

    const response = await fetch(url, {
      redirect: "follow",
      headers: {
        "user-agent": "Proficio-Visibility-Audit/1.0",
        accept: "text/html,application/xhtml+xml",
      },
      signal: AbortSignal.timeout(15000),
    });
    const html = await response.text();
    return evaluate({
      page,
      url,
      response,
      html,
      durationMs: Math.round(performance.now() - started),
    });
  } catch (error) {
    return {
      name: page.name,
      path: page.path,
      requestedUrl: url,
      finalUrl: "",
      status: 0,
      durationMs: Math.round(performance.now() - started),
      title: "",
      description: "",
      canonical: "",
      h1s: [],
      words: 0,
      jsonLdCount: 0,
      internalLinkCount: 0,
      foundTopics: [],
      missingTopics: page.topics,
      issues: [
        `Seite nicht erreichbar: ${
          error instanceof Error ? error.message : String(error)
        }`,
      ],
    };
  }
};

const checkResource = async (path, expectedType) => {
  const url = new URL(path, `${baseUrl}/`).toString();
  try {
    if (buildDir) {
      const content = await readFile(
        `${buildDir}/${path.replace(/^\//, "")}.body`,
        "utf8",
      );
      const matchesType =
        expectedType === "xml"
          ? content.trimStart().startsWith("<?xml")
          : content.length > 0;
      return {
        path,
        status: 200,
        ok: matchesType,
        contentType: expectedType,
      };
    }

    const response = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });
    const contentType = response.headers.get("content-type") || "";
    return {
      path,
      status: response.status,
      ok: response.ok && contentType.includes(expectedType),
      contentType,
    };
  } catch (error) {
    return {
      path,
      status: 0,
      ok: false,
      contentType: "",
      error: error instanceof Error ? error.message : String(error),
    };
  }
};

const renderMarkdown = ({ pages, resources, timestamp }) => {
  const issueCount = pages.reduce((total, page) => total + page.issues.length, 0);
  const lines = [
    "# Sichtbarkeits-Audit",
    "",
    `- Ziel: ${baseUrl}`,
    `- Quelle: ${buildDir ? `Build ${buildDir}` : "öffentliche Website"}`,
    `- Prüfung: ${timestamp}`,
    `- Seiten: ${pages.length}`,
    `- Hinweise: ${issueCount}`,
    "",
    "## Technische Grundlagen",
    "",
    ...resources.map(
      (resource) =>
        `- ${resource.ok ? "OK" : "FEHLER"} ${resource.path}: HTTP ${
          resource.status || "–"
        }${resource.contentType ? ` · ${resource.contentType}` : ""}${
          resource.error ? ` · ${resource.error}` : ""
        }`,
    ),
    "",
    "## Seiten",
    "",
  ];

  for (const page of pages) {
    lines.push(
      `### ${page.name}`,
      "",
      `- URL: ${page.requestedUrl}`,
      `- Status: ${page.status || "nicht erreichbar"} · ${page.durationMs} ms`,
      `- Titel: ${page.title || "fehlt"}`,
      `- H1: ${page.h1s.join(" | ") || "fehlt"}`,
      `- Wörter: ${page.words}`,
      `- Interne Links: ${page.internalLinkCount}`,
      `- Strukturierte Daten: ${page.jsonLdCount}`,
      `- Gefundene Themen: ${page.foundTopics.join(", ") || "keine"}`,
      "",
      ...(page.issues.length
        ? ["Hinweise:", "", ...page.issues.map((issue) => `- ${issue}`), ""]
        : ["Keine technischen oder inhaltlichen Grundprobleme erkannt.", ""]),
    );
  }

  lines.push(
    "## Einordnung",
    "",
    "Dieses Audit prüft Erreichbarkeit, Indexierbarkeit und die inhaltliche Grundabdeckung. Tatsächliche Google-Impressionen, Klicks und Suchanfragen müssen zusätzlich aus der Google Search Console ausgewertet werden.",
    "",
  );

  return lines.join("\n");
};

const timestamp = new Date().toISOString();
const [pages, resources] = await Promise.all([
  Promise.all(config.pages.map(auditPage)),
  Promise.all([
    checkResource("/robots.txt", "text/plain"),
    checkResource("/sitemap.xml", "xml"),
  ]),
]);

const report = renderMarkdown({ pages, resources, timestamp });
console.log(report);

if (outputPath) {
  await writeFile(outputPath, report, "utf8");
  console.error(`Bericht gespeichert: ${outputPath}`);
}

const hasAvailabilityFailure =
  pages.some((page) => page.status === 0 || page.status >= 400) ||
  resources.some((resource) => !resource.ok);

if (hasAvailabilityFailure) process.exitCode = 1;
