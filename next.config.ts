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
      {
        protocol: "https",
        hostname: "i.discogs.com",
        port: "",
        pathname: "/*",
        search: "",
      },
      {
        protocol: "https",
        hostname: "st.discogs.com",
        port: "",
        pathname: "/*",
        search: "",
      },
    ],
  },
};

export default nextConfig;
