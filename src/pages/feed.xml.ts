import type { APIRoute } from 'astro';
import { getPublishedPosts, postPath, escapeXml } from '../utils/posts';

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPublishedPosts();
  const origin = site ?? new URL('https://johnnyhchen.github.io');
  const items = posts.map((post) => {
    const link = new URL(postPath(post), origin).href;
    const description = escapeXml(post.data.description ?? post.data.title);
    return `
    <item>
      <title>${escapeXml(post.data.title)}</title>
      <description>${description}</description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
    </item>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Johnny Chen</title>
    <description>Notes on ideas, projects, and things worth keeping.</description>
    <link>${origin.href}</link>
    <atom:link href="${new URL('/feed.xml', origin).href}" rel="self" type="application/rss+xml" />
    <language>en</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
