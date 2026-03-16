import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com", // L'asterisco copre lh3, lh4, ecc.
      },
    ],
  },
};

export default nextConfig;
