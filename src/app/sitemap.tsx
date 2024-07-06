import { getBlogPosts } from '@/app/blog/utils'

export const baseUrl = 'https://dylexbenji.vercel.app/'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = [ '/blog','/software_projects','/hardware_projects'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [{
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority:1,
  },...routes, ...blogs]
}