import Logo from "../../assets/logo.png";
import React, { useState } from "react";
import { House, Search, ArrowDownCircle, Menu, X, Disc } from "lucide-react";
import { Link } from "react-router-dom";

const SpotifyNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-2 flex items-center justify-between sticky top-0 z-50 h-[64px]">
      {/* LEFT SECTION */}
      <div className="flex items-center flex-1 md:flex-initial">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
      </div>

      {/* CENTER SECTION */}
      <div className="hidden md:flex items-center justify-center flex-1 max-w-[500px] mx-4 gap-2">
        <button className="bg-[var(--secondary-bg)] cursor-pointer p-3 rounded-full hover:scale-110 transition text-white flex items-center justify-center min-w-[48px] min-h-[48px]">
          <House size={25} />
        </button>

        {/* Search Input Bar */}
        <div className="flex items-center bg-[var(--secondary-bg)] rounded-full px-4 py-3 flex-1 group hover:bg-[#2a2a2a] transition focus-within:ring-2 focus-within:ring-white min-h-[48px]">
          <label htmlFor="search">
            <Search
              className="text-[var(--text-secondary)] group-hover:text-white transition mr-3 hover:scale-110 cursor-pointer"
              size={25}
            />
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="What do you want to play?"
            className="bg-transparent text-md text-white placeholder-[var(--text-secondary)] focus:outline-none w-full font-medium"
          />
          <div className="h-5 w-[1px] bg-[var(--text-secondary)] mx-3"></div>
          <Link to="/browser">
            <Disc
              className="text-[var(--text-secondary)] hover:scale-110 cursor-pointer transition"
              size={25}
            />
          </Link>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="hidden lg:flex items-center space-x-6 text-sm font-bold text-[var(--text-secondary)]">
        <Link
          to="/premium"
          className="transition text-[16px] hover:text-white hover:scale-110"
        >
          Premium
        </Link>
        <Link
          to="/support"
          className="transition text-[16px] hover:text-white hover:scale-110"
        >
          Support
        </Link>
        <Link
          to="/Download"
          className="transition text-[16px] hover:text-white hover:scale-110"
        >
          Download
        </Link>
        <div className="h-5 w-[1px] bg-[var(--text-secondary)]"></div>{" "}
        {/* Vertical Divider */}
        <Link
          to="/"
          className="hover:text-white hover:scale-105 transition flex items-center gap-1.5"
        >
          <ArrowDownCircle size={18} /> Install App
        </Link>
        <Link
          to="/Signup"
          className="tracking-wide transition hover:text-white hover:scale-105"
        >
          Sign up
        </Link>
        <Link
          to="/Login"
          className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition duration-100 text-[15px]"
        >
          Log in
        </Link>
      </div>

      {/* Mobile Toggle Button (For Responsive Layout) */}
      <div className="flex items-center gap-4 lg:hidden">
        {/* Mobile Search Icon shortcut */}
        <button className="md:hidden text-[#b3b3b3] hover:text-white">
          <Search size={24} />
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-[#b3b3b3] hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-black border-l border-zinc-800 z-50 transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden pt-20 px-6`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-white"
        >
          <X size={26} />
        </button>

        <div className="flex flex-col space-y-6 text-lg font-bold">
          <Link to="/" className="flex items-center gap-3 hover:text-white">
            Home
          </Link>
          <Link to="/premium" className="hover:text-white">
            Premium
          </Link>
          <Link to="/support" className="hover:text-white">
            Support
          </Link>
          <Link to="/download" className="hover:text-white">
            Download
          </Link>
          <hr className="border-zinc-800" />
          <Link
            to="/signup"
            className="font-medium hover:text-white"
          >
            Sign up
          </Link>
          <Link
            to="Login"
            className="w-full px-6 py-3 font-bold text-center text-black bg-white rounded-full cursor-pointer"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SpotifyNavbar;
