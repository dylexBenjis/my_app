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


      <div
        className="relative h-[100px] sm:h-[140px] w-screen bg-fixed overflow-hidden"
        style={{
          backgroundImage: "url(/software.webp)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          margin: 0,
        }}
      >
<div className="bg-gradient-to-b from-black/40 from-80% to-black absolute inset-0"></div>      <div className={styles.container}>
        <div className="fixed top-12  text-4xl sm:top-[70px]   border-l-2 border-gray-400 pl-5 text-white font-bold [text-shadow:_-1px_-1px_0_rgb(7_9_4),_-1px_1px_0_rgb(7_9_9),_-1px_1px_0_rgb(7_9_9),_1px_1px_0_rgb(7_9_9)]">
          Blog
        </div>
      </div>
      </div>
      <div
        className={`flex justify-center bg-background relative w-screen h-auto  z-[2] pt-3`}
        style={{
          boxShadow: "0px -5px 5px 0px rgba(0, 0, 0, 0.8)",
        }}
      >
        <div
        className={styles.container}
          style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "1200px",
          }}
        >
          <BlogSection />
        </div>
      </div>
    </div>
  );
};

export default Page;
