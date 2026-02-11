import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog" }),
  schema: rssSchema,
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string().optional(),
    pubDatetime: z.any().optional(), // permissive for now
    description: z.string().optional(),
    author: z.string().default("Derek Mayor"),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
  }).passthrough(),
});

export const collections = { blog, posts };
