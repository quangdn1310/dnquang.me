import MotionDiv from "@/components/MotionDiv";
import React from "react";
import ExperienceData from "@/data/experience.json";

const Experience = () => {
  return (
    <div className="bg-white py-14">
      <div className="container">
        <MotionDiv
          className="w-[40%] space-y-4"
          initial={{ opacity: 0, x: "-100px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, easing: "ease-in" }}
        >
          <h1 className="title text-7xl md:text-8xl">experience.</h1>
          <p className="text-xl tracking-wider">
            All about my freelance and professional work experience.
          </p>
        </MotionDiv>

        <div className="mt-10 border-b lg:mx-20 pb-5">
          <p className="text-base tracking-wider">
            "If I look at it personally, experience isn&#39;t just what I&#39;ve
            been through; it&#39;s how I&#39;ve learned and grown from those
            moments that shapes my own journey."
          </p>
        </div>

        <div className="mt-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 lg:px-20 lg:border-l border-[#cecece]">
              <h2 className="text-4xl font-bold font-proxima mb-2">
                Freelance
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 lg:px-20 lg:border-l border-[#cecece] space-y-6">
              <h2 className="text-4xl font-bold font-proxima">
                Full-time Work
              </h2>
              {ExperienceData.map((exp) => (
                <div key={exp.id} className="space-y-4">
                  <h3 className="">
                    <span className="font-bold">{exp.company} </span>
                    <span>
                      &#40;
                      {exp.start_date}-{exp.end_date}
                      &#41;
                    </span>
                  </h3>

                  <p>{exp.description}</p>
                  <p>
                    Here are the details of the work I did at {exp.company}:
                  </p>
                  <div>
                    <ul className="list-disc pl-6">
                      {exp.work_details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-[300px] order-first lg:order-last">
              {/* <TOC content={blogData.content} /> */}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 lg:px-20 lg:border-l border-[#cecece] space-y-6">
              <h2 className="text-4xl font-bold font-proxima">What They Say</h2>
            </div>
            <div className="space-y-4">
              <p>&#95;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
