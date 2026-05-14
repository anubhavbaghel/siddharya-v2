/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow accessing the dev server via local IP (e.g. from your phone)
  allowedDevOrigins: ['192.168.1.51', '192.168.1.51:3000', 'localhost:3000']
};

module.exports = nextConfig;
