import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pl-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 border-t-2 border-[var(--secondary-bg)] w-full mt-15 py-10 sm:py-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold text-white">Company</h1>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Jobs
          </Link>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            For the Record
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold text-white">Communities</h1>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            For Artists
          </Link>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Developer
          </Link>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Advertising
          </Link>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Investors
          </Link>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Vendors
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold text-white">Useful links</h1>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Support
          </Link>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Free Mobile App
          </Link>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Popular by Country
          </Link>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Import your music
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold text-white">Spotify</h1>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Premium Individual
          </Link>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Premium Duo
          </Link>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Premium Family
          </Link>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Premium Student
          </Link>
          <Link
            to="/"
            className="text-[var(--text-secondary)] font-semibold hover:text-white hover:underline"
          >
            Spotify Free
          </Link>
        </div>
        <div className="flex gap-3 md:justify-end">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--black-bg-var-1)] hover:bg-[var(--black-bg-var-2)]">
            <Link to="/">
              <FaInstagram size={20} />
            </Link>
          </span>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--black-bg-var-1)] hover:bg-[var(--black-bg-var-2)]">
            <Link to="/">
              <FaTwitter size={20} />
            </Link>
          </span>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--black-bg-var-1)] hover:bg-[var(--black-bg-var-2)]">
            <Link to="/">
              <FaFacebook size={20} />
            </Link>
          </span>
        </div>
      </div>
      <div className="border-t-2 border-[var(--secondary-bg)] py-10 mb-5">
        <p className="text-[#707070] text-sm font-semibold">© {new Date().getFullYear()} Spotify clone</p>
      </div>
    </footer>
  );
};

export default Footer;
