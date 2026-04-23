import type { NextConfig } from "next";

const repo = "order-management-system"; // 🔥 EXACT NAME

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;