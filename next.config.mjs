/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/food-details/:id",
        destination: "/foods/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
