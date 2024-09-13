import Link from "next/link";
import React from "react";

interface CardProps {
  item: {
    link: string;
    title: string;
    desc: string;
    thumb: string;
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <Link
      href={item.link}
      className="relative p-2 bg-white shadow-md border border-transparent hover:border-[#eeeeee]"
    >
      <figure className="h-48 bg-gray-400">
        <img
          src={item.thumb || "./images/default-image.jpg"}
          alt={item.title}
          className="w-full h-full object-cover object-center opacity-70"
        />
      </figure>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-bottom from-transparent to-black opacity-50"></div>
      <div className="p-4 bg-white text-sm">
        <h1 className="text-lg font-semibold">{item.title}</h1>
        <p className="text-sm">{item.desc}</p>
      </div>
    </Link>
  );
};

export default Card;
