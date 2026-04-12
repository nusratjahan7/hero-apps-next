"use client";
import React, { useState } from "react";
import logoImg from "@/assets/img/logo.png";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import MyLink from "./MyLink";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", text: "Home" },
    { path: "apps", text: "Apps" },
    { path: "installation", text: "Installation" },
    { path: "dashboard", text: "Dashboard" },
  ];

  return (
    <nav className="shadow">
      <div className="flex justify-between items-center py-2 px-3 container mx-auto">
        {/* Logo */}
        <Image
          src={logoImg}
          alt="PH play store logo"
          className="w-12 h-12"
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-between gap-6 items-center">
          {navItems.map((item, index) => (
            <MyLink key={index} href={item.path}>
              {item.text}
            </MyLink>
          ))}
        </ul>

        {/* Desktop Button */}
        <Link href="https://github.com/" className="hidden md:block">
          <button className="btn bg-blue-600 text-white flex items-center gap-2">
            <FaGithub />
            Contribute
          </button>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          <ul className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              <MyLink key={index} href={item.path} onClick={() => setMenuOpen(false)}>
                {item.text}
              </MyLink>
            ))}
          </ul>
          <Link href="https://github.com/" onClick={() => setMenuOpen(false)}>
            <button className="btn bg-blue-600 text-white flex items-center gap-2 w-full justify-center">
              <FaGithub />
              Contribute
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;