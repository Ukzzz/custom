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
        `${BASE_URL}/assets/logo.png`,
        `${BASE_URL}/assets/facility-raw.png`,
        `${BASE_URL}/assets/facility-cutting.png`,
        `${BASE_URL}/assets/facility-stitching.png`,
        `${BASE_URL}/assets/facility-quality.png`,
        `${BASE_URL}/assets/facility-finishing.png`,
        `${BASE_URL}/assets/facility-distribution.png`,
      ],
    },
    {
      url: `${BASE_URL}/facility`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        `${BASE_URL}/assets/facility-raw.png`,
        `${BASE_URL}/assets/facility-cutting.png`,
        `${BASE_URL}/assets/facility-stitching.png`,
        `${BASE_URL}/assets/facility-quality.png`,
        `${BASE_URL}/assets/facility-finishing.png`,
        `${BASE_URL}/assets/facility-distribution.png`,
      ],
    },
    {
      url: `${BASE_URL}/capabilities`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
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
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/samples`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: Array.from({ length: 60 }, (_, i) => {
        const num = i + 1;
        // Skip 38 and 39 (files don't exist)
        if (num === 38 || num === 39) return null;
        return `${BASE_URL}/assets/sample-${num}.png`;
      }).filter(Boolean) as string[],
    },
    // Service Landing Pages
    {
      url: `${BASE_URL}/uniforms/corporate-uniforms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/uniforms/industrial-workwear`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/uniforms/driver-uniforms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/uniforms/school-uniforms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/uniforms/hotel-restaurant-uniforms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/uniforms/staff-uniforms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Location Page
    {
      url: `${BASE_URL}/uniform-manufacturer-lahore`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/how-to-choose-uniform-fabric-pakistan`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/corporate-uniform-policy-guide-pakistan`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/why-choose-local-uniform-manufacturer-lahore`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/kbwear-total-parco-uniform-case-study`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
