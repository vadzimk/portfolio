/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  typescript:{
    ignoreBuildErrors:true,
  },
  images: {
      domains: [process.env.IMAGE_HOST_NAME]
  },
  async headers() { // Tell browser to cache font file for a long time (~1yr) to avoid unnecessary re-downloads for subsequent site visits.
    return [
      {
        source: "/fonts/Hahmlet/Hahmlet-VariableFont_wght.ttf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/Rubik/Rubik-VariableFont_wght.ttf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

}

module.exports = nextConfig
