import React, { useState } from "react";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

async function Certification() {
  type sanityQueriedContent = {
    title: string;
    issued: string;
    expires: string;
    certUrl: string;
    image: {
      asset: {
        url: string;
      };
    };
  };

  // Fetch content with GROQ
  async function getContent() {
    const queryContent = `*[_type == "certificate"]{
                              title,
                              issued,
                              expires,
                              certUrl,
                              image {
                                  asset->{url},
                              }
                          }`;

    const queried_content = await client
      .fetch(queryContent)
      .then((queried_content) => {
        console.log(
          queried_content,
          queried_content[0].image.asset.url,
          queried_content[0].name
        );

        return queried_content;
      });
    return queried_content;
  }

  // Log content to console
  let content: sanityQueriedContent[] = await getContent();

  const ProjectContainer = (data: sanityQueriedContent) => {
    const DataExpired = () => {
      let expiredOn = parseInt(data?.expires);
      let currentYear = new Date().getFullYear(); //get todays year

      console.log(currentYear, currentYear > expiredOn, expiredOn);
      return (
        <div className="flex h-fit items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentYear > expiredOn ? "bg-red-500" : "bg-green-500"} opacity-75`}
            ></span>
            <span
              className={`relative inline-flex rounded-full h-3 w-3 ${currentYear > expiredOn ? "bg-red-500" : "bg-green-500"} `}
            ></span>
          </span>
          <div className="text-[12px] italic">
            {currentYear > expiredOn ? "Expired" : "Active"}
          </div>
        </div>
      );
    };

    return (
      <div className="flex flex-col">
        <div className="text-sm text-center mt-2">{data?.title}</div>
        <div className="relative h-[150px] w-full bg-gray-900/[0.2] my-2">
          <Image
            src={data.image?.asset?.url}
            alt="image"
            fill
            objectFit="contain"
          />
        </div>
        <div className="flex justify-between">
          <div className="text-sm">issued: {data?.issued}</div>
          <div className="text-sm">expires: {data?.expires}</div>
        </div>
        <div className="flex bottom-0 left-0 pr-2 gap-2 h-auto w-full justify-between text-lg">
          <div>
            <DataExpired />
          </div>
          <div className="text-[12px] underline xl:no-underline hover:underline decoration-dotted decoration-blue-500">
            <Link href={data?.certUrl}>View certificate</Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-10 mt-5">
      <div className="px-0  lg:px-0 gap-5">
        <div className="flex flex-col items-center p-4 gap-4 w-full h-full">
          <div className="flex justify-center font-bold text-center text-2xl py-2">
            Certifications
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-max">
            {content.map((data: sanityQueriedContent, index: number) => {
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
}

export default Certification;
