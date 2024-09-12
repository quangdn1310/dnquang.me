import ButtonOutline from "@/components/ButtonOutline";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="h-[calc(100vh-160px)] w-full flex flex-col justify-center items-center bg-white">
      <h1 className="title text-9xl font-extrabold tracking-wider">404</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute -translate-y-2">
        Page Not Found
      </div>
      <ButtonOutline type="primary">
        <Link href="/">Go Home</Link>
      </ButtonOutline>
    </section>
  );
};

export default NotFound;
