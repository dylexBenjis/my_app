import Image from "next/image";
import HeroIntroduction from "@/components/home/HeroIntroduction";
import styles from "@/app/page.module.css";
import Experience from "@/components/home/experience";
import Projects from "@/components/home/projects";
import Certification from "@/components/home/certification";
import Aboutme from "@/components/home/Aboutme";

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col pt-[5rem]">
      <div></div>
      <div className={styles.container}>
        <HeroIntroduction />
        {/* <Aboutme /> */}
        <Certification />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
