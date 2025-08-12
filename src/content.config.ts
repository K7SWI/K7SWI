import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    authImage: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string().default(""),
    }),
    tags: z.array(
      z.enum([
        "antennas",
        "announcements",
        "classes",
        "club",
        "contests",
        "build",
        "events",
        "ham radio",
        "members",
        "pota",
        "presentation",
        "vhf",
      ]),
    ),
    summary: z.string(),
    type: z.enum(["Article", "Presentation"]),
  }),
});

export const collections = { blog };
