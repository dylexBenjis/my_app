import BlogSection from "@/components/home/blogSection";
import React from "react";
import styles from "@/app/page.module.css";

export const metadata = {
  title: "Blog",
  description: "I try to document everything.",
};

const Page = () => {
  return (
    <div className="">
      <div className={styles.container}>
        <div className="fixed top-16 text-2xl sm:top-24 z-[2]  border-l-2 border-gray-400 pl-5 text-white font-bold [text-shadow:_-1px_-1px_0_rgb(7_9_4),_-1px_1px_0_rgb(7_9_9),_-1px_1px_0_rgb(7_9_9),_1px_1px_0_rgb(7_9_9)]">
          Blog
        </div>
      </div>

      <div
        className="relative h-[100px] sm:h-[150px] w-full bg-fixed overflow-hidden"
        style={{
          backgroundImage: "url(/software.webp)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          margin: 0,
        }}
      ></div>
      <div
        className="flex relative px-0 lg:px-[10rem] z-[3] pt-[2.5rem] sm:pt-[3rem] pb-[5rem] bg-gray-200 dark:bg-[#04050c]"
        style={{ boxShadow: "0px -5px 5px 0px rgba(0, 0, 0, 0.8)" }}
      >
        <div
          className={styles.container}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <BlogSection />
        </div>
      </div>
    </div>
  );
};

export default Page;
