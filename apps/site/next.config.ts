import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    const WEB_APP_URL = process.env.WEB_APP_URL || "http://localhost:3000";
    return [
      {
        source: "/login",
        destination: `${WEB_APP_URL}/login`,
      },
      {
        source: "/sign-up",
        destination: `${WEB_APP_URL}/sign-up`,
      },
      {
        source: "/dashboard/:path*",
        destination: `${WEB_APP_URL}/dashboard/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `${WEB_APP_URL}/api/:path*`,
      },
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
