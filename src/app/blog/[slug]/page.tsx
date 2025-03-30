import { notFound } from "next/navigation";
import { CustomMDX } from "@/mdx-components";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { baseUrl } from "@/app/sitemap";
import styles from "@/app/page.module.css";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
//@ts-ignore
export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

interface Params {
  slug: string;
}

export default async function Blog({ params }: Readonly<{ params: Params }>) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <div className="py-[5rem]">
        <div
          className={styles.container}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className=" prose dark:prose-invert">
            <div className="flex flex-row gap-1 mt-2 mb-8 items-center text-[0.65rem] sm:text-base ">
              <Link
                href="/"
                className="cursor-pointer w-fit justify-center items-center flex "
              >
                Home Page
              </Link>
              <div>{">"}</div>
              <Link
                href="/blog"
                className="cursor-pointer w-fit justify-center items-center flex "
              >
                Blog Posts
              </Link>
              <div>{">"}</div>
              <Link href={`/blog/${post.slug}`} className="no-underline">
                {post.metadata.title}
              </Link>
            </div>

            <article className="sm:w-full md:max-w-[400px] lg:max-w-[600px]">
              <CustomMDX source={post.content} />
            </article>
            <div className="flex flex-row gap-2 mt-10 items-center">
              <Link
                href="/blog"
                className="rounded-full bg-gray-400/20 hover:scale-110 cursor-pointer w-8 h-8 justify-center items-center flex"
              >
                <FaArrowLeft />
              </Link>
              <span className="text-gray-500">back to blog posts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
