import type { NextConfig } from 'next'

const nextConfig = (
  phase: string,
  { defaultConfig }: { defaultConfig: NextConfig }
): NextConfig => {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL

  return {
    images: {
      remotePatterns: [
        new URL('https://assets.untappd.com/social/**'),
        new URL(`${NEXT_PUBLIC_API_URL}/api/beer-labels/**`),
        new URL(`${NEXT_PUBLIC_API_URL}/api/beer-photos/**`)
      ],
      dangerouslyAllowSVG: true
    },
    typescript: {
      ignoreBuildErrors: true
    }
  }
}

export default nextConfig
