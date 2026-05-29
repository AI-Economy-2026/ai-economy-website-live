import type { NextConfig } from "next";

// Single-app config: no multi-zone rewrites/proxy, no assetPrefix.
// The marketing site and member app are now one Next.js project on one origin.
const nextConfig: NextConfig = {
  // Both source apps shipped without lint-on-build blocking. Keep `npm run lint`
  // available for devs, but don't fail the production build on pre-existing
  // lint findings in feature code (this merge is structural, not a rewrite).
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
};

export default nextConfig;
