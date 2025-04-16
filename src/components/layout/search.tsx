"use client";
import React, { useState } from "react";
import Image from "next/image";

import { SearchIcon } from "@/assets";

const Search = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  return (
    <div>
      <form className="search-form">
        <input type="search" placeholder="Search Here" />
      </form>
      <button>
        <Image src={SearchIcon} alt="Search" />
      </button>
    </div>
  );
};

export default Search;
