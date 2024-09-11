import {
  GithubOutlined,
  LinkedinOutlined,
  SkypeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-black py-5">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <img src="./images/logo.png" alt="Logo" className="w-20" />
        </Link>
        <div className="flex items-center gap-x-12">
          <nav>
            <ul className="flex gap-x-4">
              <li className="text-lg text-white transition-all hover:text-gray-500 px-2">
                <Link href="/about">about</Link>
              </li>
              <li className="text-lg text-white transition-all hover:text-gray-500 px-2">
                <Link href="">book</Link>
              </li>
              <li className="text-lg text-white transition-all hover:text-gray-500 px-2">
                <Link href="">portfolio</Link>
              </li>
              <li className="text-lg text-white transition-all hover:text-gray-500 px-2">
                <Link href="">blog</Link>
              </li>
              <li className="text-lg text-white transition-all hover:text-gray-500 px-2">
                <Link href="">contact</Link>
              </li>
            </ul>
          </nav>
          {/* SOCIALS */}
          <ul className="flex gap-x-4">
            <li className="text-lg text-white transition-all hover:text-gray-500 px-2">
              <Link href="">
                <GithubOutlined className="text-2xl" />
              </Link>
            </li>
            <li className="text-lg text-white transition-all hover:text-gray-500 px-2">
              <Link href="">
                <TwitterOutlined className="text-2xl" />
              </Link>
            </li>
            <li className="text-lg text-white transition-all hover:text-gray-500 px-2">
              <Link href="">
                <LinkedinOutlined className="text-2xl" />
              </Link>
            </li>
            <li className="text-lg text-white transition-all hover:text-gray-500 px-2">
              <Link href="">
                <SkypeOutlined className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
