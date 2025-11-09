// next.config.js
import { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig = {
  // You can add your custom Next.js configs here if needed
  experimental: {
    turbo: false  // Disable Turbopack
  }
};

export default nextConfig;
