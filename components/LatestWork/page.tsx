import React from "react";
import Card from "../Card/page";
import { LATEST_WORKS } from "@/constants/common";

const LatestWork = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-lg uppercase text-center font-medium tracking-widest relative before:absolute before:w-1/3 before:border before:border-[#eeeeee] before:top-1/2 before:-translate-y-1/2 before:left-0 after:absolute after:w-1/3 after:border after:border-[#eeeeee] after:top-1/2 after:-translate-y-1/2 after:right-0">
          Some of my latest work
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5">
          {LATEST_WORKS.map((item) => (
            <Card key={item.link} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
