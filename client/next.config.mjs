/** @type {import('next').NextConfig} */

const API_URL = process.env.NEXT_PUBLIC_API_URL

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      // issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  async rewrites() {
    return [
      {
        source: '/:path*/api/:path*',
        destination: `${API_URL}/api/:path*`
      },
    ]
  }
};

export default nextConfig;
