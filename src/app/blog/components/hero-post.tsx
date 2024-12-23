import CoverImage from "./cover-image";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import Image from "next/image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function HeroPost({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <section className="py-3">
      <div className="text-gray-400 text-sm border-gray-400 border-l-2 pl-5">
        <DateFormatter dateString={date} />
      </div>
      <div className="flex flex-row py-1 gap-4">
        <div className="flex flex-col w-[70%] justify-around">
          <div className="text-lg bold">
            <Link href={`/blog/${slug}`} prefetch={true}>
              {title}
            </Link>
          </div>
          <div className="text-gray-400 text-sm">{excerpt}</div>
          <div className="text-blue-700 dark:text-green-400 hover:text-orange-500 cursor-pointer pt-3 w-fit">
            <Link href={`/blog/${slug}`} prefetch={true}>
              read post
            </Link>
          </div>
        </div>
        <div className="flex relative h-[76px] lg:h-[146px] w-[30%] shadow-md overflow-hidden bg-gray-100">
          <Image src={coverImage} alt="" fill={true} />
        </div>
      </div>
    </section>
  );
}
