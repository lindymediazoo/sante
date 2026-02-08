/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // keep App Router enabled
  },
};

module.exports = nextConfig;
