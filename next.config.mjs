/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["apinewspaper.sportsandtravelonline.com","api.sportsandtravelonline.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;
