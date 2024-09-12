import { NAV_LINKS } from "@/constants/common";
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
          {NAV_LINKS.map((nav) => (
            <li key={nav.text}>
              <Link href={nav.path} className="hover:text-[#333333]">
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
