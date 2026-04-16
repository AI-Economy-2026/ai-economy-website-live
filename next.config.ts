import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
  // WordPress redirects — populated from content/redirects/wordpress-redirects.ts
  // Add entries here when old WordPress URLs are confirmed
  async redirects() {
    return [];
  },
};

export default nextConfig;
