/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fix for image optimization
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  // Enable experimental features if needed
  experimental: {
    // Enable if needed for App Router
  },
};

module.exports = nextConfig;