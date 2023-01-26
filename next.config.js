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
  images: {
    domains: ["images.unsplash.com"],
    path: "",
    loader: "akamai",
    unoptimized: true,
  },
};


