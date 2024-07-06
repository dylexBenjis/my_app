import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/kidq2gna/production/f1c2291091488d0f9296b32f9a2681b182a4e989-1080x607.jpg',
      },      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/kidq2gna/production/64a19346cedccb6b468d220b4959e477330375fc-1080x525.jpg',
      },     {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/kidq2gna/production/e2409be8acc5eaa99da7b0d8e52366330abca8c1-1600x784.png',
      },
    ]
  }

}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
