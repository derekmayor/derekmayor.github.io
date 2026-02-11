import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection("posts");

  return rss({
    title: "Derek Mayor — Journal",
    description: "Derek Mayor's journal",
    site: context.site,
    items: posts
      .sort(
        (a, b) =>
          new Date(b.data.pubDatetime).valueOf() -
          new Date(a.data.pubDatetime).valueOf()
      )
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDatetime,
        description: post.data.description,
        content: sanitizeHtml(parser.render(post.body)),
        link: `/journal/posts/${post.id}/`,
      })),
  });
}
