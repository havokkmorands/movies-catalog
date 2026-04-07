/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "movie-catalog";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
