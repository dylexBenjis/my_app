import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/ui/project-card";
import { client } from "../../sanity/lib/client";

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

const Projects = async () => {
  type sanityQueriedContent = {
    title: "";
    description: "";
    repoUrl: "";
    projectUrl: "";
    image: {
      asset: {
        url: "";
      };
    };
    value: "";
  };

  // Log content to console
  let content: sanityQueriedContent[] = await getContent();

  return (
    // <div className="py-10 px-0 lg:px-[10rem]" id="projects">
    //   <div className="flex flex-col gap-4">
    //     <div className="flex pb-3 font-bold justify-center text-2xl">
    //       Projects
    //     </div>
    //     <div className="flex flex-col sm:flex-row gap-5 py-3 justify-between">
    //       <div
    //         className="flex relative text-[1.2rem] hover:text-[1.3rem] cursor-pointer justify-center items-center h-[5rem]  w-full sm:w-[calc(100%/2)]"
    //         style={{
    //           transition: "all 0.1s ease-in-out",
    //           clipPath:
    //             "polygon(20px 0%, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0% 20px)",
    //         }}
    //       >
    //         <Link href="/software_projects">
    //           <div className="absolute inset-0 h-full w-full -z-1">
    //             <Image src="/software.webp" alt="bgImage" fill={true} />
    //           </div>
    //           <div className="absolute inset-0 bg-black/60" />
    //           <div className="absolute inset-0 flex justify-center items-center text-white">
    //             Software Development
    //           </div>
    //         </Link>
    //       </div>

    //       <div
    //         className="flex relative text-[1.2rem] hover:text-[1.3rem] cursor-pointer justify-center items-center h-[5rem]  w-full sm:w-[calc(100%/2)]"
    //         style={{
    //           transition: "all 0.1s ease-in-out",
    //           clipPath:
    //             "polygon(20px 0%, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0% 20px)",
    //         }}
    //       >
    //         <Link href="/it_projects">
    //           <div className="absolute inset-0 h-full w-full -z-1">
    //             <Image src="/cloud_it_image.jpg" alt="bgImage" fill={true} />
    //           </div>
    //           <div className="absolute inset-0 bg-black/60" />
    //           <div className="absolute inset-0 flex justify-center items-center text-white">
    //             Cloud/I.T. Projects
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // {/* Projects Section */}
    <section id="projects" className="py-12 md:py-20 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-grid">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
          <TabsTrigger value="networking">Networking</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.map((data, index) => {
              return (
                //@ts-ignore

                data.value === undefined && (
                  <section key={index}>
                    <ProjectCard
                      title={data?.title}
                      description={data?.description}
                      tags={["React", "Node.js", "Network Automation"]}
                      image={data?.image.asset.url}
                      githubUrl={data?.repoUrl}
                      liveUrl={data?.projectUrl}
                    />
                  </section>
                )
              );
            })}
          </div>
        </TabsContent>
        {/* {
          //@ts-ignore
          data.value === "fullstack" && (
            <TabsContent value="fullstack" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="E-commerce Platform"
                  description="A scalable e-commerce platform with advanced product filtering, user authentication, and payment processing."
                  tags={["Next.js", "MongoDB", "Stripe"]}
                  image="/placeholder.svg?height=200&width=300"
                />
                <ProjectCard
                  title="Real-time Collaboration App"
                  description="A collaborative workspace with real-time document editing, video conferencing, and task management."
                  tags={["React", "WebSockets", "Express"]}
                  image="/placeholder.svg?height=200&width=300"
                />
                <ProjectCard
                  title="Content Management System"
                  description="A customizable CMS with advanced content modeling, user roles, and API-first architecture."
                  tags={["TypeScript", "GraphQL", "PostgreSQL"]}
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>
          )
        }
        {
          //@ts-ignore
          data.value === "networking" && (
            <TabsContent value="networking" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Enterprise Network Management System"
                  description="A comprehensive solution for monitoring and managing enterprise networks with real-time analytics and automated troubleshooting."
                  tags={["React", "Node.js", "Network Automation"]}
                  image="/placeholder.svg?height=200&width=300"
                />
                <ProjectCard
                  title="Cloud-based Network Monitoring Tool"
                  description="A cloud-native solution for monitoring network performance across distributed infrastructures."
                  tags={["AWS", "Python", "Docker"]}
                  image="/placeholder.svg?height=200&width=300"
                />
                <ProjectCard
                  title="Network Security Assessment Tool"
                  description="An automated tool for identifying and reporting security vulnerabilities in network infrastructures."
                  tags={["Python", "Network Security", "REST API"]}
                  image="/placeholder.svg?height=200&width=300"
                />
              </div>
            </TabsContent>
          )
        } */}
      </Tabs>
    </section>
  );
};

export default Projects;
