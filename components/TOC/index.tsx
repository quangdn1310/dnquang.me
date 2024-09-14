"use client";
import React, { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TOCProps {
  content: string;
}

const TOC: React.FC<TOCProps> = ({ content }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");

    const headingELements = doc.querySelectorAll("h1, h2, h3");

    const parserHeading = Array.from(headingELements).map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: parseInt(el.tagName.replace("H", ""), 10),
    }));

    setHeadings(parserHeading);
  }, [content]);

  return (
    <div className="w-full bg-gray-100 px-4 py-3 text-left text-gray-800 break-words rounded-md sticky top-10">
      <div className="mx-auto text-xl font-semibold">
        <strong>Table of content</strong>
      </div>
      <ul className="mt-2 px-2 pl-6">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: `${(heading.level - 1) * 20}px` }}
          >
            <a
              className="block hover:bg-gray-200 px-2 py-1 rounded"
              href={`#${heading.id}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TOC;
