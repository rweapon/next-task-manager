/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/next-task-manager/",
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
