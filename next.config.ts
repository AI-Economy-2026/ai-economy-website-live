import type { NextConfig } from "next";

const toolkitProxyUrl = process.env.TOOLKIT_PROXY_URL || "";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/toolkit",
        destination: `${toolkitProxyUrl}/`,
      },
      {
        source: "/toolkit/:path*",
        destination: `${toolkitProxyUrl}/:path*`,
      },
      // Static assets and routes served by the toolkit app at their absolute paths
      {
        source: "/assets/:path*",
        destination: `${toolkitProxyUrl}/assets/:path*`,
      },
      {
        source: "/dashboard",
        destination: `${toolkitProxyUrl}/dashboard`,
      },
      {
        source: "/dashboard/:path*",
        destination: `${toolkitProxyUrl}/dashboard/:path*`,
      },
    ];
  },
};

export default nextConfig;
