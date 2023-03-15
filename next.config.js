/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "racejb.github.io";

const nextConfig = {
  assetPrefix: !debug ? "." : "",
  // assetPrefix: !debug ? `/${repository}` : "",
  basePath: !debug ? `/${repository}` : "",
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // experimental: {
  //   scrollRestoration: true,
  // },
  images: {
    unoptimized: true,
    // loader: "akamai",
    // path: "",
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
