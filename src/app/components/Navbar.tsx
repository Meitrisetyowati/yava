// src/app/components/Navbar.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  activeCategory?: string;
  setActiveCategory?: (category: string) => void;
};

const Navbar = ({ activeCategory = "All Products", setActiveCategory = () => {} }: NavbarProps) => {
  const categories = ["All Products", "Granola", "Biscuits", "Bar", "Popcorn", "Puffs", "Cashews"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <div className="flex-1 flex justify-center md:justify-start">
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo YAVA" width={60} height={60} />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm text-black">
            <a href="#" className="hover:text-red-500 font-normal">Lontar Sugar</a>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-red-500 focus:outline-none font-normal"
              >
                Our Foods ▾
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 bg-white border rounded shadow-md w-36 text-xs z-10">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-1 hover:bg-gray-100 ${
                        activeCategory === cat ? 'text-red-500' : ''
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="hover:text-red-500 font-normal">Ingredients</a>
            <a href="#" className="hover:text-red-500 font-normal">Company</a>
            <a href="#" className="hover:text-red-500 font-normal">YAVAKataMereka</a>
            <Link href="/news-event" className="hover:text-red-500 font-normal">
              News & Event
            </Link>
            <div className="space-x-1 font-normal">
              <span>ID</span>
              <span className="text-red-500">EN</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-2 pt-1 bg-white border-t text-sm font-normal">
            <ul className="space-y-2 text-black">
              <li><a href="#" className="block py-1.5 hover:text-red-500 font-normal">Lontar Sugar</a></li>

              <li>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left font-normal"
                >
                  Our Foods ▾
                </button>
                {isDropdownOpen && (
                  <ul className="pl-3 mt-1 space-y-1 border-l border-gray-300">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <button
                          onClick={() => {
                            setActiveCategory(cat);
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className={`block w-full text-left py-1 hover:text-red-500 ${
                            activeCategory === cat ? 'text-red-500' : ''
                          }`}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li><a href="#" className="block py-1.5 hover:text-red-500 font-normal">Ingredients</a></li>
              <li><a href="#" className="block py-1.5 hover:text-red-500 font-normal">Company</a></li>
              <li><a href="#" className="block py-1.5 hover:text-red-500 font-normal">YAVAKataMereka</a></li>
              <li>
                <Link href="/news-event" className="block py-1.5 hover:text-red-500 font-normal">
                  News & Event
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;