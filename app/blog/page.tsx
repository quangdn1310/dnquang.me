import CardBlog from "@/components/CardBlog/page";
import MotionDiv from "@/components/MotionDiv";
import React from "react";
import BLOGS_JSON from "@/data/blogs.json";
import ButtonOutline from "@/components/ButtonOutline";

const Blog = () => {
  // Fetch data from JSON file
  const { blogs } = BLOGS_JSON;

  return (
    <div>
      <section className="bg-white py-14">
        <div className="container">
          <MotionDiv
            className="w-full space-y-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, easing: "ease-in" }}
          >
            <h1 className="title text-7xl md:text-8xl">Personal blog.</h1>
            <p className="text-lg">Web development thoughts and stories.</p>
          </MotionDiv>
        </div>
      </section>
      <section className="py-14">
        <div className="container">
          <div className="space-y-10">
            {blogs.map((blog, index) => (
              <CardBlog key={blog.id} index={index} blog={blog} />
            ))}
          </div>
          <div className="flex justify-center mt-5">
            <ButtonOutline type="primary">Load more</ButtonOutline>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
