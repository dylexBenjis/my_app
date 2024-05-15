import Image from "next/image";
import HeroIntroduction from "@/components/home/HeroIntroduction";
import styles from '@/app/page.module.css'
import Experience from "@/components/home/experience";
import BlogSection from "@/components/home/blogSection";
import Projects from "@/components/home/projects";

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col pt-[5rem]">
      <div className={styles.container}>
        <HeroIntroduction />
        <Experience />
        <Projects/>
        <BlogSection/>
      </div>
    </main>
  );
}
