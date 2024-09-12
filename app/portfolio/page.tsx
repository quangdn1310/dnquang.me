import MotionDiv from "@/components/MotionDiv";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="container">
          <div className="flex items-center justify-between border-b">
            <MotionDiv
              className="w-[40%] space-y-4"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, easing: "ease-in" }}
            >
              <h1 className="title text-8xl">portfolio.</h1>
            </MotionDiv>
            <MotionDiv
              className="w-[60%] h-[460px] relative overflow-hidden"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, easing: "ease-in" }}
            >
              <></>
            </MotionDiv>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
