import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-300 via-gray-500 text-white py-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="space-y-2 text-sm text-slate-800 mb-6 md:mb-0">
            <p className="flex items-center gap-2">
              <FaEnvelope /> nomanjawaid.tech@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> +92-315-2032663
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Karachi, Pakistan
            </p>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-6 items-center justify-center">
            <Link href="https://github.com/craftcodenoman" target="_blank">
              <span className="flex items-center justify-center bg-gradient-to-r from-black to-indigo-300 text-white p-3 rounded-full shadow-2xl hover:scale-105 transition duration-300">
                <FaGithub size={20} />
              </span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/noman-jawaid-46919b364"
              target="_blank"
            >
              <span className="flex items-center justify-center bg-gradient-to-r from-indigo-700 to-black text-white p-3 rounded-full shadow-2xl hover:scale-105 transition duration-300">
                <FaLinkedin size={20} />
              </span>
            </Link>

            <Link href="https://nike-nu-lovat.vercel.app/" target="_blank">
              <span className="flex items-center justify-center bg-gradient-to-r from-black to-indigo-300 text-white p-3 rounded-full shadow-2xl hover:scale-105 transition duration-300">
                <SiVercel size={20} />
              </span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-black pt-6 text-center">
          <p className="text-black text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
