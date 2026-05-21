import React, { useState } from "react";
import SearchCard from "../components/reuseable/SearchCard";
import { Search } from "lucide-react";

const browser = () => {

  const [search, setSearch] = useState("")

  console.log('search = ',search);
  

  return (
    <div className="sm:p-3">
      {/* only for small screen  */}

      <div className="sm:hidden block text-white ">
        <form action="">
          <h1 className="font-bold text-2xl">Search</h1>
          <div className="flex items-center gap-2 bg-white  p-2 rounded-sm mt-3">
            <Search color="black"/>
            <input
              type="search"
              name="search"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="What do you want to listen to?"
              className="w-full h-8 outline-none text-black placeholder:font-semibold"
            />
          </div>
        </form>
      </div>

      <h1 className="font-bold md:text-2xl mb-5 mt-10">Browse all</h1>
      <SearchCard />
    </div>
  );
};

export default browser;
