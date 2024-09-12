"use client";
import React, { useEffect, useState } from "react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  return (
    <header className="w-full bg-black py-5">
      <div className="container flex flex-wrap gap-4 justify-center lg:justify-between items-center">
        <Link href="/">
          <img src="./images/logo.png" alt="Logo" className="w-20" />
        </Link>
        <div className="flex items-center gap-x-12">
          <nav className="">
            <ul className="flex gap-x-4">
              {NAV_LINKS.map((nav) => (
                <li className="px-2" key={nav.text}>
                  <Link
                    href={nav.path}
                    className={`text-lg ${
                      nav.path === currentPath ? "text-gray-500" : "text-white"
                    } transition-all hover:text-gray-500`}
                  >
                    {nav.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* SOCIALS */}
          <ul className="gap-x-4 hidden lg:flex">
            {SOCIAL_LINKS.map((soc) => {
              const IconComponent = soc.icon;
              return (
                <li className="px-2" key={soc.text}>
                  <Link
                    href={soc.link}
                    className="text-lg text-white transition-all hover:text-gray-500"
                  >
                    <IconComponent className="text-2xl" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
