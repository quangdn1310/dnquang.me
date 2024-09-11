import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <section className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: `url(/images/grid-bg.png)`,
          backgroundSize: "contain",
        }}
      ></div>
      <div className="container h-[600px] relative">
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-8xl">&#60;coder&#62;</h1>
          <Link href="/about" className="text-lg tracking-widest">
            Front-End Developer who writes <br /> clean, elegant and efficient
            code.
          </Link>
        </div>

        <div
          className="absolute inset-0 top-[10%] pointer-events-none "
          style={{
            background: `url(/images/character.png) no-repeat`,
            backgroundSize: "contain",
            backgroundPosition: "right",
          }}
        ></div>
      </div>
    </section>
  );
};

export default HeroBanner;
