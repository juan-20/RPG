/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avribacki.gitlab.io', 'pbs.twimg.com', 'cdn.discordapp.com', 'abs.twimg.com']
  },
  distDir:`build`
}

module.exports = nextConfig
