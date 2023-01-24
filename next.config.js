/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: '/user/digital_resume',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
    path: "",
    loader: "akamai",
    unoptimized: true,
  },
};


