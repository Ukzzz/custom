import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
              key: 'Permissions-Policy',
              value: 'geolocation=(), microphone=(), camera=()',
          },
          {
            key: 'Content-Security-Policy',
            // Adapted from .htaccess, but allowing 'unsafe-eval' might be needed for dev mode. 
            // In production, Next.js strict CSP can be tricky with scripts. 
            // Using a slightly more permissive policy for now to ensure functionality, 
            // especially for Next.js internal scripts.
            value: "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self'",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          }
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/facility.html',
        destination: '/facility',
        permanent: true,
      },
      {
        source: '/capabilities.html',
        destination: '/capabilities',
        permanent: true,
      },
      {
        source: '/process.html',
        destination: '/process',
        permanent: true,
      },
      {
        source: '/clients.html',
        destination: '/clients',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/samples.html',
        destination: '/samples',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
