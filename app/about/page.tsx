import React from "react";
import Part from "@/components/About/Part";
import ChartSkills from "@/components/About/ChartSkills";
import MotionDiv from "@/components/MotionDiv";
import Link from "next/link";
import { ABOUT_COLLECTION } from "@/constants/common";

const page = () => {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="container ">
          <div className="flex items-center flex-col lg:flex-row gap-5 justify-between border-b">
            <MotionDiv
              className="w-full lg:w-[40%] space-y-4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, easing: "ease-in" }}
            >
              <h1 className="title text-8xl">about.</h1>
              <p className="text-xl text-[#757575] tracking-widest">
                I'm a software developer based in <br /> Ho Chi Minh, Vietnam.
              </p>
              <p className="text-base text-[#757575] max-w-[90%] tracking-widest">
                Since 2019, I've enjoyed turning complex problems into simple,
                beautiful and intuitive designs. When I'm not pushing pixels,
                you'll find me cooking, gardening or working out in the park.
              </p>
            </MotionDiv>
            <MotionDiv
              className="w-full lg:w-[60%] h-[460px] relative overflow-hidden"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, easing: "ease-in" }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: "url(/images/music-notes.png) no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="absolute inset-0 h-[110%]"
                style={{
                  background: "url(/images/character.png) no-repeat",
                  backgroundPositionX: "left",
                  backgroundPositionY: "top",
                  backgroundSize: "cover",
                }}
              ></div>
            </MotionDiv>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
            {ABOUT_COLLECTION.map((item, index) => (
              <MotionDiv
                key={index}
                className="p-2 bg-white shadow-md rounded-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeIn",
                  delay: 0.3 * index,
                }}
              >
                <img
                  className="w-full aspect-square object-cover object-center rounded-sm"
                  src={item.path}
                  alt={item.name}
                />
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h1 className="text-3xl mb-5">Back-end development</h1>
            <ul className="space-y-3">
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <div className="w-4/5 mx-auto">
              <Part />
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h1 className="text-3xl mb-5">Front-end development</h1>
            <ul className="space-y-3">
              <li>HTML5, CSS3, ES6+</li>
              <li>Typescipt</li>
              <li>React/NextJS</li>
              <li>TailwindCss</li>
              <li>BootStrap</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container flex flex-col lg:flex-row justify-between items-center">
          <MotionDiv
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, easing: "ease-in" }}
          >
            <img
              src="/images/Robert_Kiyosaki.jpg"
              alt="Robert Kiyosaki"
              className="w-full h-80 object-contain"
            />
          </MotionDiv>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl text-center">
              "Don&#39;t let the fear of losing be greater than the excitement
              of winning."
            </h1>
            <p className="text-center">Robert Kiyosaki.</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h1 className="text-3xl text-right">My skills</h1>
          <ChartSkills />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-5">
          <MotionDiv
            className="w-full md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, easing: "ease-in" }}
          >
            <h1 className="text-3xl">My story</h1>
            <p className="text-base pb-4">
              Learn a little bit more about me, how I transitioned into software
              development, and how I built my career as a developer. I&#39;ve
              included key things I've learned, book recommendations, and even
              some sneak peeks of the projects I've worked on.
            </p>
            <Link href="/blog" className="underline underline-offset-2">
              Read my story
            </Link>
          </MotionDiv>
          <MotionDiv
            className="ư-full md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, easing: "ease-in" }}
          >
            <div className="w-full h-full p-2 bg-white shadow-lg">
              <img
                src="/images/my_desktop.jpg"
                alt="My Desktop"
                className="w-full h-full"
              />
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
};

export default page;
