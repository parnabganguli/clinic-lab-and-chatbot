import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_GEMINI_API_KEY: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  },
};

export default nextConfig;
