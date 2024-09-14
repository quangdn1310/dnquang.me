"use client";
import MotionDiv from "@/components/MotionDiv";
import React, { useEffect, useState } from "react";
import BLOGS_JSON from "@/data/blogs.json";
import parse from "html-react-parser";
import { Blog } from "@/types/blog";
import { CalendarOutlined } from "@ant-design/icons";
import { formatDate } from "@/utils/formatDate";
import TOC from "@/components/TOC";

const BlogDetail = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const [blogData, setBlogData] = useState<Blog>();

  const { blogs } = BLOGS_JSON;

  useEffect(() => {
    if (slug) {
      const blog = blogs.find((blog) => blog.slug === slug);

      setBlogData(blog);
    }
  }, [slug]);

  if (!blogData) {
    return (
      <div className="bg-white py-14">
        <div className="container">
          <h1 className="title text-6xl text-center">
            Can't get blog content.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white py-14">
      <div className="container">
        <MotionDiv
          className="w-full space-y-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, easing: "ease-in" }}
        >
          <h1 className="title text-6xl lg:text-8xl">{blogData.title}.</h1>
          <p className="text-lg">{blogData.description}</p>
        </MotionDiv>

        <div className="mt-10">
          <div className="flex space-x-4">
            <div className="space-x-2">
              <CalendarOutlined />
              <span>{formatDate(blogData.date)}</span>
            </div>
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="h-5 w-5"
              >
                <path d="M7.75 2.75a.75.75 0 00-1.5 0v1.258a32.987 32.987 0 00-3.599.278.75.75 0 10.198 1.487A31.545 31.545 0 018.7 5.545 19.381 19.381 0 017 9.56a19.418 19.418 0 01-1.002-2.05.75.75 0 00-1.384.577 20.935 20.935 0 001.492 2.91 19.613 19.613 0 01-3.828 4.154.75.75 0 10.945 1.164A21.116 21.116 0 007 12.331c.095.132.192.262.29.391a.75.75 0 001.194-.91c-.204-.266-.4-.538-.59-.815a20.888 20.888 0 002.333-5.332c.31.031.618.068.924.108a.75.75 0 00.198-1.487 32.832 32.832 0 00-3.599-.278V2.75z"></path>
                <path
                  fillRule="evenodd"
                  d="M13 8a.75.75 0 01.671.415l4.25 8.5a.75.75 0 11-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 11-1.342-.67l4.25-8.5A.75.75 0 0113 8zm2.037 6.5L13 10.427 10.964 14.5h4.073z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{blogData.date}</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex">
            <div className="flex-1 lg:px-20 lg:border-l border-[#cecece]">
              {parse(blogData.content)}
            </div>
            <div className="lg:w-[300px]">
              <TOC content={blogData.content} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
