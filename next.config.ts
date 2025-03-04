import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["coverartarchive.org", "i.discogs.com", "st.discogs.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coverartarchive.org",
        port: "",
        pathname: "/release",
        search: "",
      },
    ],
  },
};

export default nextConfig;
