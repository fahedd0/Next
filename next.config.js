/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Proper image optimization configuration
  images: {
    domains: [],
    // No need to disable optimization in development
    // This ensures consistent behavior between environments
  },
  // Enable necessary experimental features
  experimental: {
    // Empty for now - add specific features if needed
  },
};

module.exports = nextConfig;