/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript:{
    ignoreBuildErrors:true,
  },
  images: {
      domains: [process.env.IMAGE_HOST_NAME]
  },
}

module.exports = nextConfig
// {
//   protocol: process.env.IMAGE_HOST_PROTOCOL,
//     hostname: process.env.IMAGE_HOST_NAME,
//   port: process.env.IMAGE_HOST_PORT,
//   pathname: process.env.IMAGE_HOST_PATHNAME,
// },