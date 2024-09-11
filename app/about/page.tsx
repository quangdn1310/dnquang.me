import MotionDiv from "@/components/MotionDiv";
import React from "react";

const page = () => {
  return (
    <section className="bg-white py-16">
      <div className="container ">
        <div className="flex items-center justify-between border-b">
          <MotionDiv
            className="w-[40%] space-y-4"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, easing: "ease-in" }}
          >
            <h1 className="text-8xl">about.</h1>
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
            className="w-[60%] h-[460px] relative overflow-hidden"
            initial={{ opacity: 0, x: "100%" }}
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

        <div className="grid grid-cols-6 gap-4 mt-8">
          {Array.from({ length: 6 }).map((item, index) => (
            <div key={index} className="p-2 bg-white shadow-md rounded-md">
              <img
                className="w-full rounded-sm"
                src={`/images/default-image.jpg`}
                alt="Image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
