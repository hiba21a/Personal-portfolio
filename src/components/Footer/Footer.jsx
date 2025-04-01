import React from "react";
import { Link } from "react-router-dom";
// import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
// import { LiaFacebookF } from "react-icons/lia";
// import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 w-full mt-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 py-9 dark:text-white border-t border-gray-400 dark:border-white">
          <p className="text-center md:text-left ">@ 2025. All Rights Reserved</p>
          <p className="text-center md:text-left">Development By Hiba Abbass</p>
          <div className="flex gap-3">
          {/* <Link
              to=""
              className="flex justify-center items-center rounded-full bg-sky-600 p-2 transition duration-300 ease-in-out hover:bg-sky-700 hover:scale-105 hover:opacity-90"
            >
              <LiaFacebookF  className="text-white" />
            </Link> */}
            {/* <Link
              to=""
              className="flex justify-center items-center rounded-full bg-sky-600 p-2 transition duration-300 ease-in-out hover:bg-sky-700 hover:scale-105 hover:opacity-90"
            >
              <FaTwitter  className="text-white" />
            </Link> */}
            <Link
              to="https://www.linkedin.com/in/hiba-abbas-a5b613344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="flex justify-center items-center rounded-full bg-sky-600 p-2 transition duration-300 ease-in-out hover:bg-sky-700 hover:scale-105 hover:opacity-90"
            >
              <TiSocialLinkedin className="text-white" />
            </Link>
            {/* <Link
              to=""
              className="flex justify-center items-center rounded-full bg-sky-600 p-2 transition duration-300 ease-in-out hover:bg-sky-700 hover:scale-105 hover:opacity-90"
            >
              <AiOutlineInstagram className="text-white" />
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;