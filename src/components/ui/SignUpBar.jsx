import React from "react";
import { Link } from "react-router-dom";

const SignUpBar = () => {
  return (
    <footer to="/signup" className="hidden md:block">
      <div className="border-10 border-black">
        <div className="rounded-md p-3 flex items-center justify-between bg-gradient-to-l from-[#509BF5] to-[#AE2896]">
          <div className="w-[70%]">
            <h3 className="font-bold text-[15px]">Preview of Spotify</h3>
            <h1>
              Sign up to get unlimited songs and podcasts with occasional ads.
              No credit card needed.
            </h1>
          </div>
          <div className="hover:scale-105 duration-75">
            <Link
              to="/signup"
              className="font-semibold py-4 px-6 text-black bg-white rounded-full"
            >
              Sign up free
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SignUpBar;
