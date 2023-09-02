/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
const withExportImages = require("next-export-optimize-images");
const nextConfig = { output: "export" };

module.exports = withBundleAnalyzer(withExportImages({ ...nextConfig }));
