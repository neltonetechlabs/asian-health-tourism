import Image from "next/image";
import { useTranslations } from "next-intl";
import { Input } from "@headlessui/react";

import classes from "../forms.module.css";
import { SearchIcon } from "@/assets";

const BlogSearch = () => {
  const t = useTranslations("Common");
  return (
    <div>
      <form>
        <div className={classes.searchInpWrap}>
          <Input className={classes.searchInp} placeholder={t("search_blog")} />
          <div className={classes.searchIcon}><Image src={SearchIcon} alt="Search" /></div>
        </div>
      </form>
    </div>
  );
};

export default BlogSearch;
