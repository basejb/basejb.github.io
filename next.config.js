/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "racejb.github.io";

const nextConfig = {
  // assetPrefix: !debug ? `/${repository}` : "",
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  modularizeImports: {
    // lodash: {
    //   transform: "lodash/{{member}}",
    // },
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
