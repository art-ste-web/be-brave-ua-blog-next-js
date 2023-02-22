/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
