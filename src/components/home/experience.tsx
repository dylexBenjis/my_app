import Image from "next/image";
import React from "react";
import { FaJava, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import {
  SiCloudflare,
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  return (
    <div className="py-10  mt-5">
      <div className="flex justify-center">
        <div className="flex w-full md:w-[70%] flex-col items-center p-4 gap-4 h-full">
          <div className="flex justify-center font-bold text-center text-2xl">
            Stack
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-5 h-fit">
            <div className="flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2">
              <p>JavaScript</p>
              <Image
                src="/js.svg"
                alt="js_logo"
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2">
              <p>Typescript</p>
              <SiTypescript className="text-blue-900" />
            </div>
            <div className="flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2">
              <p>python</p>
              <Image
                src="/python_logo.svg"
                alt="python_logo"
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2">
              <p>react</p>
              <FaReact className="text-blue-400" />
            </div>
            <div className="flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2">
              <p>node.js</p>
              <FaNodeJs className="text-green-400" />
            </div>
            <div className="flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2">
              <p>express.js</p>
              <SiExpress className="text-white" />
            </div>

            <div className="flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2">
              <p>Sql / NoSql</p>
            </div>
            <div className="flex w-full bg-gray-900/20 dark:bg-gray-900 items-center justify-center gap-2 h-[3rem] p-2">
              <p>Git</p>
              <SiGit className="text-orange-700" />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col p-4 gap-4 border-solid border-2 rounded-[1rem] border-gray-600/50 w-full h-full items-center">
          <div>Work Placements</div>
          {experienceData.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-full gap-5 px-1 sm:px-14 lg:px-[6rem]"
              >
                <div className="flex gap-3 sm:gap-5">
                  <div className="flex w-fit h-[50px] rounded-full overflow-hidden">
                    <Image
                      src={data.companyLogo}
                      alt={data.companyLogoAlt}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div title="experience company">{data.company}</div>
                    <div
                      className="text-gray-500 text-[0.7rem]"
                      title="role in company"
                    >
                      {data.jobTitle}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="cursor-pointer mt-5">
            <button className="h-full w-full bg-gray-600/30 dark:bg-gray-600 px-5 py-3">
              download cv
            </button>
          </div>
        </div> */}
      </div>
    </div>
    // {/* Skills Section */}
    // <section id="skills" className="py-12 md:py-20 scroll-mt-20">
    //   <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
    //   <Tabs defaultValue="frontend">
    //     <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
    //       <TabsTrigger value="frontend">Frontend</TabsTrigger>
    //       <TabsTrigger value="backend">Backend</TabsTrigger>
    //       <TabsTrigger value="networking">Networking</TabsTrigger>
    //       <TabsTrigger value="devops">DevOps</TabsTrigger>
    //     </TabsList>
    //     <TabsContent value="frontend" className="mt-6">
    //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    //         {["React", "Next.js", "Tailwind CSS", "HTML/CSS"].map((skill) => (
    //           <Card key={skill}>
    //             <CardContent className="flex items-center justify-center p-6 gap-2">
    //               <span className="font-medium">{skill}</span>
    //               <Image
    //                 src="/python_logo.svg"
    //                 alt="python_logo"
    //                 width={20}
    //                 height={20}
    //               ></Image>
    //             </CardContent>
    //           </Card>
    //         ))}
    //       </div>
    //     </TabsContent>
    //     <TabsContent value="backend" className="mt-6">
    //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    //         {[
    //           "Node.js",
    //           "Express",
    //           "Python",
    //           "Django",
    //           "PostgreSQL",
    //           "MongoDB",
    //           "GraphQL",
    //           "REST API",
    //         ].map((skill) => (
    //           <Card key={skill}>
    //             <CardContent className="flex items-center justify-center p-6">
    //               <span className="font-medium">{skill}</span>
    //             </CardContent>
    //           </Card>
    //         ))}
    //       </div>
    //     </TabsContent>
    //     <TabsContent value="networking" className="mt-6">
    //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    //         {[
    //           "Cisco Networking",
    //           "Network Security",
    //           "VPN",
    //           "Routing & Switching",
    //           "Firewalls",
    //           "Load Balancing",
    //           "SDN",
    //           "Network Automation",
    //         ].map((skill) => (
    //           <Card key={skill}>
    //             <CardContent className="flex items-center justify-center p-6">
    //               <span className="font-medium">{skill}</span>
    //             </CardContent>
    //           </Card>
    //         ))}
    //       </div>
    //     </TabsContent>
    //     <TabsContent value="devops" className="mt-6">
    //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    //         {[
    //           "Docker",
    //           "Kubernetes",
    //           "CI/CD",
    //           "AWS",
    //           "Azure",
    //           "Terraform",
    //           "Linux",
    //           "Git",
    //         ].map((skill) => (
    //           <Card key={skill}>
    //             <CardContent className="flex items-center justify-center p-6">
    //               <span className="font-medium">{skill}</span>
    //             </CardContent>
    //           </Card>
    //         ))}
    //       </div>
    //     </TabsContent>
    //   </Tabs>
    // </section>
  );
};

export default Experience;
