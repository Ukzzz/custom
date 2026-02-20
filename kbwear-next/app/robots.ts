import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
          '/*.json$',
        ],
      },
    ],
    sitemap: 'https://www.kb-wear.com/sitemap.xml',
    host: 'https://www.kb-wear.com',
  }
}
