import { MetadataRoute } from "next";

const BASE_URL = "https://maderarescuemission.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/donate`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/2026-update`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/our-story`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/visit`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/lighthouse-of-hope`,
      lastModified: new Date("2025-01-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/triage-center-groundbreaking`,
      lastModified: new Date("2023-12-04"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/working-mens-ministry-spotlight`,
      lastModified: new Date("2023-10-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/connection-ministry-one-year`,
      lastModified: new Date("2023-09-26"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/discipleship-program-inside-look`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/staff`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/pray`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/partners`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/donors`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/doors-of-hope`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/doctrine`,
      lastModified: new Date("2026-03-04"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
