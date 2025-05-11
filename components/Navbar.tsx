"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/AboutUs" },
    { name: "Education", href: "/Education" },
    { name: "Skills", href: "/Skills" },
    { name: "Projects", href: "/Projects" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-indigo-300 text-white shadow-2xl shadow-blue-800 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-5">
            <h1 className="text-4xl font-extrabold text-white ml-5drop-shadow-[0_2px_6px_rgba(239,68,68,0.5)]">
              PORTFOLIO
            </h1>

            <div className="hidden md:flex space-x-4 text-sm font-medium">
              {navItems.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="px-5 py-2 rounded-md hover:bg-emerald-600 hover:scale-105 transition-all duration-300 shadow-inner shadow-emerald-900"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-white text-sm font-semibold"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-emerald-700 shadow-inner">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="block w-full text-left text-base px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 shadow-md hover:scale-105 transition-all duration-300"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
