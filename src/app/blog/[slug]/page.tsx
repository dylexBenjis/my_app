import { notFound } from 'next/navigation'
import { CustomMDX } from '@/mdx-components'
import { formatDate, getBlogPosts } from '@/app/blog/utils'
import { baseUrl } from '@/app/sitemap'
import styles from '@/app/page.module.css'
import Image from 'next/image'



export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
//@ts-ignore
export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
//@ts-ignore
export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
          <div className='pt-[5rem]'>
      <div className={styles.container} style={{display:'flex', justifyContent:'center'}}>
        <div className='w-[600px] prose dark:prose-invert'>
        
      <div className="flex justify-between items-center mt-2 mb-8 text-sm  text-neutral-600 dark:text-neutral-400">  
      <p className="font-semibold">
        {post.metadata.title}
      </p>
        <p className="">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article>
        <CustomMDX source={post.content} />
      </article>
        </div>
      </div>
    </div>
    </section>
  )
}