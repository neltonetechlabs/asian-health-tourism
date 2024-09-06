import Image from "next/image";
import { useTranslations } from "next-intl";
import { Input, Select } from "@headlessui/react";

import classes from "../forms.module.css";
import { SearchIcon } from "@/assets";

const PackageSearch = () => {
  const t = useTranslations("Common");
  return (
    <div>
      <form className="flex gap-4">
        <div className={classes.searchInpWrap}>
          <Input className={classes.searchInp} placeholder={t("search_procedures")} />
          <div className={classes.searchIcon}><Image src={SearchIcon} alt="Search" /></div>
        </div>
        <div className={classes.selectWrap}>
          <Select className={classes.selectFilter}>
            <option value="active" disabled>Filter</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
          </Select>
        </div>
      </form>
    </div>
  );
};

export default PackageSearch;
