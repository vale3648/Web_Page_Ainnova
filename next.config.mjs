/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 Habilita next export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
