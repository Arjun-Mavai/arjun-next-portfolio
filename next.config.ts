import type { NextConfig } from "next";
const allowedHostnames = [
  "example.com",
  "img.icons8.com",
  "s3-alpha.figma.com",
  "cdn.prod.website-files.com",
  "c8.alamy.com",
  "i.vimeocdn.com",
  "toolset.com",
  "lreclvqyoujucqaggxfy.supabase.co",
  "gallerypng.com",
  "images.unsplash.com" 
];
const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: allowedHostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
