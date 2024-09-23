"use client";
import ButtonOutline from "@/components/ButtonOutline";
import MotionDiv from "@/components/MotionDiv";
import React, { useEffect, useState } from "react";
import PROJECTS from "@/data/projects.json";
import { ProjectType } from "@/types/project";
import Link from "next/link";
import Card from "@/components/Card/page";

interface DataProps {
  id: number | string;
  link: string;
  title: string;
  desc: string;
  thumb: string;
}

const Projects = () => {
  const [outsProject, setOutsProject] = useState<ProjectType>();
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    if (PROJECTS.length) {
      const outstanding = PROJECTS.find(
        (project) => project.type === "outstanding"
      );

      if (outstanding) {
        setOutsProject(outstanding);
      }
    }
  }, []);

  useEffect(() => {
    if (PROJECTS.length) {
      const projects = PROJECTS.map((proj) => ({
        id: proj.id,
        link: proj.link,
        title: proj.title,
        desc: proj.desc,
        thumb: proj.poster,
      }));

      setData(projects);
    }
  }, [PROJECTS]);

  if (!outsProject) {
    return (
      <div className="container p-10">
        <h1 className="text-3xl text-center">No project found.</h1>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-white pt-14">
        <div className="container">
          <div className="flex items-center flex-col lg:flex-row gap-2 justify-between">
            <MotionDiv
              className="w-full lg:w-1/2 h-[460px] relative overflow-hidden lg:order-last"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, easing: "ease-in" }}
            >
              <div className="relative pointer-events-none">
                <img
                  src="/images/mac_frame.png"
                  alt="Macbook Frame"
                  className="w-full"
                />
                <img
                  src={outsProject.poster}
                  alt={outsProject.title}
                  className="absolute top-[10%] left-[16%] w-[68%] h-[55%] object-cover rounded-tl-sm rounded-tr-sm  "
                />
              </div>
            </MotionDiv>
            <MotionDiv
              className="w-full lg:w-1/2 space-y-2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, easing: "ease-in" }}
            >
              <p>Outstanding</p>
              <h1 className="title text-7xl md:text-8xl">{outsProject.title}.</h1>
              <p>{outsProject.desc}.</p>
              <ButtonOutline type="primary">
                <Link href={outsProject.link}>Visit Now</Link>
              </ButtonOutline>
            </MotionDiv>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5">
          {data.map((proj) => (
            <Card key={proj.id} item={proj} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
