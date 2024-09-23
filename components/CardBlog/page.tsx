import { formatDate } from "@/utils/formatDate";
import { CommentOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

interface CardBlogProps {
  index: number;
  blog: {
    id: number | string;
    title: string;
    author: {
      name: string;
      avatar: string;
      position: string;
    };
    date: string;
    content: string;
    tags: string[];
    description: string;
    comments: number;
    thumb: string;
    slug: string;
  };
}

const CardBlog: React.FC<CardBlogProps> = ({ index, blog }) => {
  return (
    <div
      className={`relative lg:py-4 lg:px-2 border-t ${
        index % 2 !== 0 ? "bg-[#f8f8f8]" : ""
      }`}
    >
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div className="flex-1">
          <div className="flex items-center">
            <img
              src={blog.author.avatar || "./images/default-image.jpg"}
              alt={blog.author.name}
              className="w-10 h-10 rounded-full bg-[#eeeeee]"
            />
            <div className="ml-3">
              <div className="flex space-x-1">
                <h1 className="text-lg font-bold leading-none">
                  {blog.author.name} &#183;
                </h1>
                <span className="text-sm leading-none">
                  {formatDate(blog.date)}
                </span>
              </div>
              <p className="text-base">{blog.author.position}</p>
            </div>
          </div>
          <div className="py-4 text-sm">
            <h1 className="text-2xl font-bold">{blog.title}</h1>
            <p className="text-base">{blog.description}</p>
          </div>
          <p className="space-x-2">
            <CommentOutlined />
            <span className="font-semibold">{blog.comments}</span>
          </p>
          <Link href={`/blog/${blog.slug}`} className="hover:underline">
            read more.
          </Link>
        </div>

        <div className="w-full lg:w-52 h-36 lg:h-32 bg-gray-400 rounded-md order-first lg:order-last">
          <img
            src={blog.thumb || "./images/default-image.jpg"}
            alt={blog.title}
            className="w-full h-full object-cover object-center opacity-70"
          />
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
