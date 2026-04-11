import React from "react";
import logoImg from "@/assets/img/logo.png";
import { FaGithub } from "react-icons/fa";

import Image from "next/image";
import MyLink from "./MyLink";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "apps",
      text: "Apps",
    },
    {
      path: "installation",
      text: "Installation",
    },
    {
      path: "dashboard",
      text: "Dashboard",
    },
  ];

  return (
    <nav className=" shadow">
      <div className="flex justify-between gap-4 items-center py-2 px-3 container mx-auto">
        <Image
          src={logoImg}
          alt="PH play store logo"
          className="w-12.5 h-12.5"
        />

        <ul className="flex justify-between gap-6 items-center">
          {navItems.map((item, index) => (
            // Client component
            <MyLink key={index} href={item.path}>
              {item.text}
            </MyLink>
          ))}
        </ul>
        <Link href="https://github.com/">
        <button className="btn bg-blue-600 text-white">
          <FaGithub />
          Contribute
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;