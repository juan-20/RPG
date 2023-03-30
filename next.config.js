/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_ENVIROMENT,
  },
  images: {
    domains: [
      'avribacki.gitlab.io',
      'pbs.twimg.com',
      'cdn.discordapp.com',
      'abs.twimg.com',
      'lh3.googleusercontent.com'

    ]
  },
  distDir: 'build'
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
module.exports = withBundleAnalyzer({})

module.exports = nextConfig
