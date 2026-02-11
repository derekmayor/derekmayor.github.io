import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    pubDatetime: z.any().optional(),
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

export const collections = {
  posts: postsCollection,
};
