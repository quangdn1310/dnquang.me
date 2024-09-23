import Link from "next/link";
import React from "react";
import MotionDiv from "../MotionDiv";

const HeroBanner = () => {
  return (
    <section className="bg-white relative py-10 lg:py-0">
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: `url(/images/grid-bg.png)`,
          backgroundSize: "contain",
        }}
      ></div>
      <div className="container lg:h-[600px] relative">
        <MotionDiv
          className="h-full flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
          <h1 className="title text-7xl md:text-8xl">&#60;coder&#62;</h1>
          <Link href="/about" className="text-lg tracking-widest">
            Front-End Developer who writes <br /> clean, elegant and efficient
            code.
          </Link>
        </MotionDiv>
        <MotionDiv
          className="absolute inset-0 top-[10%] pointer-events-none hidden lg:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.5 }}
        >
          <div
            className="w-full h-full"
            style={{
              background: `url(/images/character.png) no-repeat`,
              backgroundSize: "contain",
              backgroundPosition: "right",
            }}
          ></div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HeroBanner;
