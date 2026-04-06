import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "out");
const SITE_URL = "https://mosaicharborventures.com";

const normalizeUrl = (url) => (url === `${SITE_URL}/` ? SITE_URL : url);

const routes = [
  { file: "index.html", canonical: `${SITE_URL}/` },
  { file: "blog.html", canonical: `${SITE_URL}/blog` },
  {
    file: "blog/build-vs-buy-operacoes-criticas.html",
    canonical: `${SITE_URL}/blog/build-vs-buy-operacoes-criticas`,
  },
  {
    file: "blog/forward-deployed-engineering.html",
    canonical: `${SITE_URL}/blog/forward-deployed-engineering`,
  },
  {
    file: "blog/legado-sem-replatform.html",
    canonical: `${SITE_URL}/blog/legado-sem-replatform`,
  },
  {
    file: "blog/revenue-architecture.html",
    canonical: `${SITE_URL}/blog/revenue-architecture`,
  },
  {
    file: "blog/sla-alertas-operacao.html",
    canonical: `${SITE_URL}/blog/sla-alertas-operacao`,
  },
  {
    file: "blog/stack-integrado.html",
    canonical: `${SITE_URL}/blog/stack-integrado`,
  },
];

const failures = [];

for (const route of routes) {
  const filePath = path.join(OUT_DIR, route.file);

  if (!existsSync(filePath)) {
    failures.push(`${route.file}: file is missing`);
    continue;
  }

  const html = readFileSync(filePath, "utf8");
  const expectedCanonical = `<link rel="canonical" href="${normalizeUrl(route.canonical)}"/>`;

  if (!html.includes(expectedCanonical)) {
    failures.push(`${route.file}: expected canonical ${route.canonical}`);
  }
}

const robotsPath = path.join(OUT_DIR, "robots.txt");

if (!existsSync(robotsPath)) {
  failures.push("robots.txt: file is missing");
} else {
  const robots = readFileSync(robotsPath, "utf8");

  if (!robots.includes("Allow: /")) {
    failures.push("robots.txt: expected Allow: /");
  }

  if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
    failures.push(`robots.txt: expected sitemap ${SITE_URL}/sitemap.xml`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("SEO output checks passed.");
