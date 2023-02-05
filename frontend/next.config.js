/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  reactStrictMode: false, // Swiper with React 18 causes TypeError: Cannot read properties of undefined [false value fixes this error]
  swcMinify: true,
  typescript:{
    ignoreBuildErrors:true,
  },
  images: {
      domains: [process.env.S3_SERVER_ADDRESS]
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
