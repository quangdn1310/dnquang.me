import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 border-t">
      <div className="container flex flex-wrap gap-2 justify-center lg:justify-between items-center">
        <Link href="/" className="text-lg tracking-wider ">
          © 2024 Dang Quang
        </Link>
        <ul className="flex gap-x-4">
          <li>
            <Link href="about hover:text-[#333333]">about</Link>
          </li>
          <li>
            <Link href="about hover:text-[#333333]">book</Link>
          </li>
          <li>
            <Link href="about hover:text-[#333333]">portfolio</Link>
          </li>
          <li>
            <Link href="about hover:text-[#333333]">blog</Link>
          </li>
          <li>
            <Link href="about hover:text-[#333333]">contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
