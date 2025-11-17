/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For static export or if you want to handle optimization manually
  },
}

module.exports = nextConfig

