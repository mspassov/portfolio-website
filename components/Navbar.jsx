"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import hamburgerIcon from "@/assets/images/menuIcon.png";
import closeIcon from "@/assets/images/closeIcon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container navbar">
        <Link href="/" className="link">
          <h1>Martin Spassov</h1>
        </Link>
        <ul className="nav-menu-list">
          <li>
            <Link href="#about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link href="#experience" className="link">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#projects" className="link">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="link">
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
        {isOpen ? (
          <Image
            onClick={() => setIsOpen(false)}
            src={closeIcon}
            width={30}
            className="hamburger-menu"
            alt="Close Mobile Menu"
          />
        ) : (
          <Image
            onClick={() => setIsOpen(true)}
            src={hamburgerIcon}
            width={30}
            className="hamburger-menu"
            alt="Open Mobile Menu"
          />
        )}
      </div>

      {/* Mobile Menu DropDown */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <ul className="mobile-menu-list">
          <li>
            <Link href="#about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link href="#experience" className="link">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#projects" className="link">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
