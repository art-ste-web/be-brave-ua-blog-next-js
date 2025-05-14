/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  experimental: {
    scrollRestoration: true,
  },
  transpilePackages: ['react-tweet'],
}

module.exports = nextConfig
