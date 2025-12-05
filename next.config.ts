import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://assets.untappd.com/social/**'),
      new URL('http://localhost:4000/api/beer-labels/**'),
      new URL('http://localhost:4000/api/beer-photos/**')
    ],
    dangerouslyAllowSVG: true
  },
  typescript: {
    // TODO: remove ignore when preparing for production
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default nextConfig
