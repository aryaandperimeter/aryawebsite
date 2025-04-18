/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Ensure proper handling of static assets
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig; 