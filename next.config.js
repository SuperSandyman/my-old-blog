/** @type {import('next').NextConfig} */
const withBundleAnalyzer =
    process.env.ANALYZE === "true" ? require("@next/bundle-analyzer")({ enabled: true }) : (config) => config;
const withExportImages = require("next-export-optimize-images");
const nextConfig = { output: "export", trailingSlash: true };

module.exports = withBundleAnalyzer(withExportImages({ ...nextConfig }));
