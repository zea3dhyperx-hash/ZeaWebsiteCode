/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/healthcare',
  //       destination: 'https://zeacrm.com/industries/healthcare-crm',
  //     },
  //     {
  //       source: '/crm/:path*',
  //       destination: 'https://external-crm.com/:path*',
  //     },
  //     {
  //       source: '/docs/:path*',
  //       destination: 'https://support-site.com/:path*',
  //     },
  //   ];
  // },
}

export default nextConfig
