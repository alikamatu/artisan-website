import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    allowedDevOrigins: ['172.28.80.1:3001']
  }
};

export default nextConfig;
