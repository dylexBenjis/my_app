import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="py-10 px-0 lg:px-[10rem]" id="projects">
      <div className="flex flex-col gap-4">
        <div className="flex pb-3 font-bold justify-center text-2xl">
          Projects
        </div>
        <div className="flex flex-col sm:flex-row gap-5 py-3 justify-between">
          <div
            className="flex relative text-[1.2rem] hover:text-[1.3rem] cursor-pointer justify-center items-center h-[5rem]  w-full sm:w-[calc(100%/2)]"
            style={{
              transition: "all 0.1s ease-in-out",
              clipPath:
                "polygon(20px 0%, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0% 20px)",
            }}
          >
            <Link href="/software_projects">
              <div className="absolute inset-0 h-full w-full -z-1">
                <Image src="/software.webp" alt="bgImage" fill={true} />
              </div>
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 flex justify-center items-center text-white">
                Software Development
              </div>
            </Link>
          </div>

          <div
            className="flex relative text-[1.2rem] hover:text-[1.3rem] cursor-pointer justify-center items-center h-[5rem]  w-full sm:w-[calc(100%/2)]"
            style={{
              transition: "all 0.1s ease-in-out",
              clipPath:
                "polygon(20px 0%, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0% 20px)",
            }}
          >
            <Link href="/it_projects">
              <div className="absolute inset-0 h-full w-full -z-1">
                <Image src="/cloud_it_image.jpg" alt="bgImage" fill={true} />
              </div>
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 flex justify-center items-center text-white">
                Cloud/I.T. Projects
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
