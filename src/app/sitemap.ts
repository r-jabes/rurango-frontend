import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/work",
    "/capabilities",
    "/studio",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/work" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/work" ? 0.9 : 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${base}/work/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
