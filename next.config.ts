import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    // AVIF is ~20% smaller than WebP, which matters most on phones. Static imports are
    // already immutable; the long TTL keeps Vercel's resized copies warm between visits.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },
  partialPrefetching: true,
  turbopack: {
    root: path.resolve(__dirname),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
