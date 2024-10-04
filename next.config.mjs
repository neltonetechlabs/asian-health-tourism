/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.albusthan.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
