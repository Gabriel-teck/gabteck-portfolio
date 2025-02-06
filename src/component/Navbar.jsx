import React from "react";
import logo from "../assets/GU.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="font-semibold text-3xl">Gu</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/Gabriel-teck">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/gabriel-udoh-536859344">
          <FaLinkedin />
        </a>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
