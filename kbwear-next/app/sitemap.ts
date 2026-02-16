import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.kb-wear.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://kb-wear.com/assets/logo.png',
        'https://kb-wear.com/assets/facility-raw.png',
        'https://kb-wear.com/assets/facility-cutting.png',
        'https://kb-wear.com/assets/facility-stitching.png',
        'https://kb-wear.com/assets/facility-quality.png',
        'https://kb-wear.com/assets/facility-finishing.png',
        'https://kb-wear.com/assets/facility-distribution.png'
      ]
    },
    {
      url: `${BASE_URL}/facility`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/capabilities`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/process`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/clients`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/samples`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
