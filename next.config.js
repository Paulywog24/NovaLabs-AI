/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['novalabsai.ai'],
  },
  i18n: {
    locales: ['en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
