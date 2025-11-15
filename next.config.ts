import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
    cacheComponents: true,
  },
};

export default nextConfig;
