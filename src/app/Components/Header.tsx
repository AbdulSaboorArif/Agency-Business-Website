"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="w-full max-w-[1440px] bg-[#2B2B2B] h-auto sm:h-[100px] mx-auto">
      <div className="flex flex-wrap justify-between justify-items-center px-4 py-4 lg:px-6 lg:py-5">
        <div className="flex items-center">
          <h1 className="text-white text-xl sm:text-2xl lg:text-[34px] font-bold">
            Digital <span>Services</span>
          </h1>
        </div>
        <nav className="text-white hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-base font-semibold xl:text-lg">
            Home
          </Link>
          <Link href="/About" className="text-base font-semibold xl:text-lg">
            About Us
          </Link>
          <Link href="/Contact" className="text-base font-semibold xl:text-lg">
            Contact Us
          </Link>
          <Link href="/Services" className="text-base font-semibold xl:text-lg">
            Services
          </Link>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <button className="bg-[#A259FF] py-3 px-6 rounded-3xl text-white font-semibold text-base xl:text-lg">
            <Link href="/Signin">Signin</Link>
          </button>
          <button className="bg-[#A259FF] py-3 px-6 rounded-3xl text-white font-semibold text-base xl:text-lg">
            <Link href="/Login">Login</Link>
          </button>
        </div>

        <button onClick={toggleMenu} className="lg:hidden p-2 rounded-md ">
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white lg:hidden" />
          ) : (
            <AlignJustify className="w-6 h-6 text-white " />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <>
          <nav className="flex flex-col items-start space-y-4 px-4 py-2 text-white lg:hidden">
            <Link href="/" className="text-base font-semibold xl:text-lg">
              Home
            </Link>
            <Link href="/About" className="text-base font-semibold xl:text-lg">
              About Us
            </Link>
            <Link
              href="/Contact"
              className="text-base font-semibold xl:text-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/Services"
              className="text-base font-semibold xl:text-lg"
            >
              Services
            </Link>
          </nav>
          <div className="text-white flex flex-col space-y-3 pt-4 border-t border-gray-200 lg:hidden">
            <Link href="/Signin" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-[#A259FF] hover:bg-[#8B47E6] py-3 px-6 rounded-3xl text-white font-semibold text-lg transition-colors duration-200">
                Sign In
              </button>
            </Link>
            <Link href="/Login" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-transparent hover:bg-[#A259FF] border-2 border-[#A259FF] py-3 px-6 rounded-3xl text-[#A259FF] hover:text-white font-semibold text-lg transition-all duration-200">
                Login
              </button>
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
