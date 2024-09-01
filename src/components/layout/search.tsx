import Image from "next/image";

import { SearchIcon } from "@/assets";

const Search = () => {
  return (
    <button>
      <Image src={SearchIcon} alt="Search" />
    </button>
  );
};

export default Search;
