/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['novalabsai.ai'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'novalabsai.ai',
      },
    ],
  },
}

module.exports = nextConfig
