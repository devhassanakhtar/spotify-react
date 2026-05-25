import Logo from "../../assets/logo.png";
import React, { useEffect, useState } from "react";
import {
  House,
  Search,
  ArrowDownCircle,
  Menu,
  X,
  Disc,
  Bell,
  Users,
  ArrowUpRight,
  Settings,
  ExternalLink,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const MainNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);


  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userEmail = currentUser?.email || "user@gmail.com";
  const userFirstLetter = userEmail.charAt(0).toUpperCase();
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || ""
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("profileImage");
    navigate("/");
    window.location.reload();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const cleanQuery = searchQuery.trim();

    if (!cleanQuery) {
      navigate("/search");
      return;
    }

    navigate(`/search?q=${encodeURIComponent(cleanQuery)}`);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;

    setSearchQuery(value);

    const cleanValue = value.trim();

    if (!cleanValue) {
      navigate("/search");
      return;
    }

    navigate(`/search?q=${encodeURIComponent(cleanValue)}`);
  };

  useEffect(() => {
    const updateProfileImage = () => {
      setProfileImage(localStorage.getItem("profileImage") || "");
    };

    window.addEventListener("profileImageUpdated", updateProfileImage);

    return () => {
      window.removeEventListener("profileImageUpdated", updateProfileImage);
    };
  }, []);

  return (
    <nav className="bg-black text-white px-4 py-2 flex items-center justify-between sticky top-0 z-50 h-[64px]">
      {/* LEFT SECTION */}
      <div className="hidden md:flex items-center flex-1 md:flex-initial">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
      </div>

      {/* CENTER SECTION */}
      <div className="hidden md:flex items-center justify-center flex-1 max-w-[500px] mx-4 gap-2">
        <Link
          to="/"
          className="bg-[var(--secondary-bg)] cursor-pointer p-3 rounded-full hover:scale-110 transition text-white flex items-center justify-center min-w-[48px] min-h-[48px]"
        >
          <House size={25} />
        </Link>

        {/* Search Input Bar */}

        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center bg-[var(--secondary-bg)] rounded-full px-4 py-3 flex-1 group hover:bg-[#2a2a2a] transition focus-within:ring-2 focus-within:ring-white min-h-[48px]"
        >
          <button type="submit">
            <Search
              className="text-[var(--text-secondary)] group-hover:text-white transition mr-3 hover:scale-110 cursor-pointer"
              size={25}
            />
          </button>

          <input
            type="text"
            id="search"
            name="search"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="What do you want to play?"
            className="bg-transparent text-md text-white placeholder-[var(--text-secondary)] focus:outline-none w-full font-medium"
          />

          <div className="h-5 w-[1px] bg-[var(--text-secondary)] mx-3"></div>

          <Link to="/search">
            <Disc
              className="text-[var(--text-secondary)] hover:scale-110 cursor-pointer transition"
              size={25}
            />
          </Link>
        </form>
      </div>

      {/* RIGHT SECTION */}
      <div className="hidden lg:flex items-center space-x-6 text-sm font-bold text-[var(--text-secondary)]">
        <Link
          to="/premium"
          className="bg-white text-black px-4 py-2 rounded-full font-bold hover:scale-105 duration-50 text-[15px]"
        >
          Explore Premium
        </Link>

        <Link
          to="/installapp"
          className="hover:text-white hover:scale-105 duration-50 flex items-center gap-1.5"
        >
          <ArrowDownCircle size={18} /> Install App
        </Link>
        <Link
          to="/signup"
          className="tracking-wide duration-50 hover:text-white hover:scale-105"
        >
          <Bell size={18} />
        </Link>
        <Link
          to="/signup"
          className="tracking-wide duration-50 hover:text-white hover:scale-105"
        >
          <Users size={18} />
        </Link>
        <div className="relative">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="bg-[var(--secondary-bg)] cursor-pointer w-12 h-12 rounded-full hover:scale-105 duration-50 text-black flex items-center justify-center"
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <h1 className="bg-[#B49BC8] rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {userFirstLetter}
              </h1>
            )}
          </button>

          {profileDropdownOpen && (
            <div className="absolute right-0 top-14 w-[325px] bg-[#282828] text-[#f2f2f2] shadow-2xl z-50 p-1">
              <Link
                to="/profile"
                onClick={() => setProfileDropdownOpen(false)}
                className="flex items-center justify-between px-3 py-3 text-sm font-semibold hover:bg-[#3e3e3e]"
              >
                <span>Account</span>
                <ExternalLink size={18} />
              </Link>

              <Link
                to="/profile"
                onClick={() => setProfileDropdownOpen(false)}
                className="block px-3 py-3 text-sm font-semibold hover:bg-[#3e3e3e]"
              >
                Profile
              </Link>

              <div className="h-[1px] bg-[#3e3e3e] my-1"></div>

              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-3 text-sm font-semibold hover:bg-[#3e3e3e] cursor-pointer"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Toggle Button (For Responsive Layout) */}
      <div className="flex md:hidden text-white font-bold text-xl">
        <h1>Good morning</h1>
      </div>

      <div className="flex items-center gap-4 lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white hover:scale-105 duration-50"
        >
          {mobileMenuOpen ? <X size={26} /> : <Settings size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`fixed top-0 right-0 h-full w-full bg-black z-50 transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden pt-20 px-10`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-white hover:scale-105 duration-50"
        >
          <X size={26} />
        </button>

        <div className="flex flex-col text-[16px] space-y-4 text-lg font-bold">
          <Link
            to="/profile"
            className="flex items-center text-xl gap-3 hover:scale-105 duration-50 hover:-translate-x-1 transition-transform"
          >
            View Account <ArrowUpRight />
          </Link>
          <Link
            to="/profile"
            className="text-xl hover:text-white duration-50 hover:-translate-x-1 transition-transform"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="text-left text-xl pb-4 hover:text-white duration-50 hover:-translate-x-1 transition-transform"
          >
            Log Out
          </button>
          <div className="h-[1.5px] w-5 bg-white"></div>{" "}
          <Link
            to="/premium"
            className="pt-4 hover:text-white duration-50 hover:-translate-x-1 transition-transform"
          >
            Premium
          </Link>
          <Link
            to="/support"
            className="hover:text-white duration-50 hover:-translate-x-1 transition-transform"
          >
            Support
          </Link>
          <Link
            to="/download"
            className="font-medium hover:text-white duration-50 hover:-translate-x-1 transition-transform"
          >
            Download
          </Link>
          <Link
            to="/privacy"
            className="font-medium hover:text-white duration-50 hover:-translate-x-1 transition-transform"
          >
            Privacy
          </Link>
          <Link
            to="/privacy"
            className="font-medium hover:text-white duration-50 hover:-translate-x-1 transition-transform"
          >
            Term
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
