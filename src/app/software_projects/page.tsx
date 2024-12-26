import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import loading from "../loading";

// Fetch content with GROQ
async function getContent() {
  const queryContent = `*[_type == "software"]{
  title,
  description,
  repoUrl,
  projectUrl,
  image {
    asset->{url},
  }
}`;

  const content = await client.fetch(queryContent).then((content) => {
    console.log(content);

    return content;
  });
  return content;
}
const Page = async () => {
  type sanityQueriedContent = {
    title: "";
    description: "";
    repoUrl: "";
    projectUrl: "";
    image: {
      url: "";
    };
  };

  // Log content to console
  let content: sanityQueriedContent[] = await getContent();

  const ProjectContainer = (data: any) => {
    return (
      <div className="flex flex-col">
        <div className="text-lg">{data?.title}</div>
        <div className="relative h-[150px] w-full bg-gray-500">
          <Image src={data.image?.asset?.url} alt="image" fill={true} />
        </div>
        <div className="py-3 px-2">{data?.description}</div>
        <div className="pt-2">
          <div className="flex absolute  py-2 bottom-0 left-0 px-2 gap-5 h-auto w-full justify-end text-lg">
            <div className="">
              <Link href={data?.repoUrl}>
                <FaGithub />
              </Link>
            </div>
            <div className="">
              <Link href={data?.projectUrl}>
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // Insert the return component calling `getContent()` below
  return (
    <div>
      <div className={styles.container}>
        <div className="fixed top-16 sm:top-24 z-[2] text-2xl border-l-2 border-gray-400 pl-5 text-white font-bold [text-shadow:_-1px_-1px_0_rgb(7_9_4),_-1px_1px_0_rgb(7_9_9),_-1px_1px_0_rgb(7_9_9),_1px_1px_0_rgb(7_9_9)]">
          SOFTWARE PROJECTS
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
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div
        className="flex relative z-[3] pt-[2.5rem] sm:pt-[3rem] pb-[5rem] bg-gray-200 dark:bg-[#04050c]"
        style={{ boxShadow: "0px -5px 5px 0px rgba(0, 0, 0, 0.8)" }}
      >
        <div className={styles.container}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-max">
            {content.map((data: object, index: number) => {
              return (
                <>
                  <div className="h-auto relative p-2 shadow-md border-solid border-[1px] overflow-hidden border-gray-300 dark:border-gray-700 rounded-lg">
                    <ProjectContainer key={index} {...data} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
