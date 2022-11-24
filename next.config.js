/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_ENVIROMENT,
  },
  images: {
    domains: ['avribacki.gitlab.io', 'pbs.twimg.com', 'cdn.discordapp.com', 'abs.twimg.com']
  },
  distDir:`build`
}

module.exports = nextConfig
