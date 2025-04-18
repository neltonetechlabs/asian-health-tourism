"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import { CloseIcon, SearchIcon } from "@/assets";
import { useLocale } from "next-intl";

const Search = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSearch = (e: any) => {
    setIsSearch((prevState) => !prevState);
  };

  const navigateToSearch = () => {
    router.replace(`/${locale}/procedures?search=${searchText}`);
  };

  useEffect(() => {
    const searchKey = searchParams?.get('search');
    if (!searchKey && searchText) {
      setIsSearch(false);
      setSearchText('');
    }
  }, [searchParams])

  return (
    <div>
      <form className={`search-form ${isSearch ? "active-form" : ""}`}>
        <input
          type="search"
          value={searchText}
          placeholder="Search Here"
          onChange={(e) => setSearchText(e?.target?.value)}
        />
        <div className="search-btn-set">
        <button type="button" onClick={handleSearch}>
          <Image src={CloseIcon} alt="Search" />
        </button>
        <button type="button" onClick={navigateToSearch}>
          <Image src={SearchIcon} alt="Search" />
        </button>
        </div>
      </form>
      <button type="button" onClick={handleSearch}>
        <Image src={SearchIcon} alt="Search" />
      </button>
    </div>
  );
};

export default Search;
