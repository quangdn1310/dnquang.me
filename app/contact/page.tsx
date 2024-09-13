import ContactForm from "@/components/ContactForm";
import MotionDiv from "@/components/MotionDiv";
import { SOCIAL_LINKS } from "@/constants/common";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="bg-white py-10">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between border-b">
            <MotionDiv
              className="w-full lg:w-2/5 space-y-4"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, easing: "ease-in" }}
            >
              <h1 className="title text-8xl">contact.</h1>
              <p className="text-xl tracking-wider">
                Get in touch with me via social media or email.
              </p>
              <ul className="flex flex-wrap gap-8">
                {SOCIAL_LINKS.map((soc) => {
                  const IconComponent = soc.icon;
                  return (
                    <li key={soc.text}>
                      <Link
                        href={soc.link}
                        className="flex items-center gap-x-4"
                      >
                        <div
                          className="w-12 h-12 rounded-full p-3"
                          style={{ backgroundColor: soc.color }}
                        >
                          <IconComponent className="text-2xl text-white" />
                        </div>
                        <span
                          className="text-xl font-bold capitalize"
                          style={{ color: soc.color }}
                        >
                          {soc.text}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </MotionDiv>
            <MotionDiv
              className="w-full lg:w-3/5 h-[460px] relative overflow-hidden"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, easing: "ease-in" }}
            >
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src="/images/contact.png"
                  alt="Contact Me"
                  className="w-2/3 h-2/3 object-contain -scale-x-100 drop-shadow-lg"
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
