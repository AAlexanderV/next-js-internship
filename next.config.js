/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "robohash.org",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/users",
        destination: "/users/1",
        permanent: true,
      },
      {
        source: "/user",
        destination: "/users/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
