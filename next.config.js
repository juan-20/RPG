/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.ENVIROMENT,
  },
  images: {
    domains: ['avribacki.gitlab.io', 'pbs.twimg.com', 'cdn.discordapp.com', 'abs.twimg.com']
  },
  distDir:`build`
}

module.exports = nextConfig
