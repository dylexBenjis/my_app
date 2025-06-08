"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  useEffect(() => {
    Aos.init({
      easing: "ease-in-sine",
      duration: 200,
    });
  }, []);
  return (
    <Card
      className="overflow-hidden flex flex-col h-full p-2"
      data-aos="zoom-in" data-aos-once="true" data-aos-duration="500"
      data-aos-easing="ease-in-sine"
    >
      <div className="relative h-[150px] w-full bg-red-900">
        <Image src={image || "/placeholder.svg"} alt={title} fill />
      </div>
      <CardContent className="p-2 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-[14px] mb-2">{description}</p>
        {/* <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div> */}
      </CardContent>
      <div className="justify-between items-center p-3 flex ">
        {githubUrl && (
          <Button size="sm" className="bg-gray-800 dark:bg-gray-300" asChild>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
        {liveUrl && (
          <Button size="sm" className="bg-gray-800 dark:bg-gray-300" asChild>
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live
            </Link>
          </Button>
        )}
      </div>
    </Card>
  );
}
