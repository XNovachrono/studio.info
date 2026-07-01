import type { NextConfig } from 'next';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.GITHUB_ACTIONS ? `/${repoName}` : '');

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  basePath: basePath || '',
  assetPrefix: basePath || '',
};

export default nextConfig;
