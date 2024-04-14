import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

/**
 * @description 
 * This function will generate a dynamic sitemap including all the blogPosts we have added to the db.
 * NOTE: this will add the actual file to the domain path like: https://acme.com/sitemap.xml
 * 
 * 
 * @example
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://acme.com</loc>
            <lastmod>2023-04-06T15:02:24.021Z</lastmod>
            <changefreq>yearly</changefreq>
            <priority>1</priority>
        </url>
        <url>
            <loc>https://acme.com/about</loc>
            <lastmod>2023-04-06T15:02:24.021Z</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>
        <url>
            <loc>https://acme.com/blog</loc>
            <lastmod>2023-04-06T15:02:24.021Z</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.5</priority>
        </url>
    </urlset>
 *
 * @see
 * https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = headers();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const domain = headersList.get('host')!;

  // this will be our static pages we don't store in the DB. ex) pricing, about, etc...
  const staticPages = [
    {
      path: null, // this is the root ex. https://acme.com
    },
    {
      path: 'blog',
    },
  ];

  return [
    // just the basic pages we have for marketing
    ...staticPages.map(({ path }) => ({
      url: `https://${domain}/${path ?? ''}`,
      lastModified: new Date(),
    })),
  ];
}
