/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  output: process.env.ENV === "production" ? "standalone" : undefined,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
