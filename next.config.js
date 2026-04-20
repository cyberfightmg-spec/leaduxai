/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@react-three/drei', '@react-three/fiber'],
  },
}

module.exports = nextConfig
