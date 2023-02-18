/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  corePlugins: {
    //React, Antd and Tailwind:fix css conflicts
    preflight: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  image: {},
};

module.exports = nextConfig;
