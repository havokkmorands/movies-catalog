/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "movie-catalog";

const nextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
};

export default nextConfig;