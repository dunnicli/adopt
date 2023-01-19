/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spcapv-hrku.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/shelter/*',
      },

      {
        protocol: 'https',
        hostname: 'spcapvnet-wsp.s3.amazonaws.com',
        port: '',
        pathname: '/media/photos/*',
      },

      {
        protocol: 'https',
        hostname: 'spcapv-pa.s3.amazonaws.com',
        port: '',
        pathname: '/media/photos/*',
      },

    ],
  },


}

module.exports = nextConfig

