/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
}

const withFonts = require('next-fonts');

module.exports = withFonts({
   enableSvg: true,
   webpack(config, options) {
     return config;
   }
}); 

module.exports = nextConfig
