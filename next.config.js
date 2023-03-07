/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/racejb.github.io" : "",
  // basePath: process.env.NODE_ENV === "production" ? "/racejb.github.io" : "/",
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
