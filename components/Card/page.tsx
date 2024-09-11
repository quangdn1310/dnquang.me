import React from "react";

interface CardProps {
  item: {
    id: number;
    thumb: string;
    title: string;
    description: string;
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div key={item.id} className="relative p-2 bg-white">
      <figure className="h-48 bg-gray-400">
        <img
          src={item.thumb || "./images/default-image.jpg"}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-bottom from-transparent to-black opacity-50"></div>
      <div className="p-4 bg-white text-sm">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
