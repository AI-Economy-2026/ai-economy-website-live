import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
  async redirects() {
    // WordPress redirects will be loaded from content/redirects/
    const { wordpressRedirects } = await import('./content/redirects/wordpress-redirects');
    return wordpressRedirects;
  },
};

export default nextConfig;
