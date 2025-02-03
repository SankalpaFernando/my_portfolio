import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Images
  output: "export", // Enables static export
  images: {
    domains: ["www.vectorlogo.zone","images.unsplash.com"],
  },
  async headers() {
    return [
      {
        // Match all routes
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for 1 year
          },
        ],
      },
    ];
  },
  basePath: '/sankalpa', // Replace 'yourrepository' with your actual repo name
  
};

export default nextConfig;
