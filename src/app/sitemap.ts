import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const BLOG_DIR = path.join(process.cwd(), "src", "app", "blog");

type RouteEntry = {
  pathname: string;
  lastModified?: Date;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

const toAbsoluteUrl = (pathname: string) => new URL(pathname, `${SITE_URL}/`).toString();

const getStaticRoutes = (): RouteEntry[] => [
  {
    pathname: "/",
    changeFrequency: "weekly",
    priority: 1,
    lastModified: new Date(),
  },
  {
    pathname: "/blog",
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified: new Date(),
  },
];

const getBlogRoutes = (): RouteEntry[] => {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap<RouteEntry>((dir) => {
      const mdxPath = path.join(BLOG_DIR, dir.name, "page.mdx");
      const pagePath = path.join(BLOG_DIR, dir.name, "page.tsx");
      const contentPath = fs.existsSync(mdxPath) ? mdxPath : pagePath;

      if (!fs.existsSync(contentPath)) {
        return [];
      }

      const stats = fs.statSync(contentPath);

      return [
        {
          pathname: `/blog/${dir.name}`,
          changeFrequency: "monthly",
          priority: 0.7,
          lastModified: stats.mtime,
        } satisfies RouteEntry,
      ];
    });
};

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...getStaticRoutes(), ...getBlogRoutes()];

  return routes.map((route) => ({
    url: toAbsoluteUrl(route.pathname),
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
