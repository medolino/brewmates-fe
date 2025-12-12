import type { NextConfig } from 'next'

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://assets.untappd.com/social/**'),
      new URL(`${NEXT_PUBLIC_API_URL}/api/beer-labels/**`),
      new URL(`${NEXT_PUBLIC_API_URL}/api/beer-photos/**`)
    ],
    dangerouslyAllowSVG: true
  },
  typescript: {
    // TODO: remove ignore when preparing for production
    ignoreBuildErrors: true
  }
}

export default nextConfig
