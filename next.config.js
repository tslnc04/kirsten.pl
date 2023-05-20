/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  output: process.env.ENV === "production" ? "standalone" : undefined,
};

module.exports = nextConfig;
