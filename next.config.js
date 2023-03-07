/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "racejb.github.io";

const nextConfig = {
  // assetPrefix: !debug ? `/${repository}` : "",
  // basePath: !debug ? `/${repository}` : "",
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
