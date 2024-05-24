/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost","tiny-druid-926a04.netlify.app","*","","lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
