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
    ],
  },


}

module.exports = nextConfig
