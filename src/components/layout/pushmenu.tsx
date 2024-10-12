"use client";

import React, { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import ActiveLink from "./activelink";
import { useLocale, useMessages, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const main_menu = [
  {
    id: 0,
    title: "home",
    link: "",
  },
  {
    id: 1,
    title: "procedure",
    link: "procedures",
  },
  {
    id: 3,
    title: "destination",
    link: "destinations",
  },
  {
    id: 4,
    title: "patient",
    link: "reviews",
  },
  {
    id: 6,
    title: "blog",
    link: "blogs",
  },
  {
    id: 7,
    title: "about",
    link: "about-us",
  },
];

const PushMenu = () => {
  const t = useTranslations("MainMenu");
  const pathname = usePathname();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <Menu noOverlay right isOpen={isMenuOpen} onStateChange={(state) => setIsMenuOpen(state?.isOpen)}>
      {main_menu?.map((menuItem) => (
        <Link onClick={() => setIsMenuOpen(false)} className="menu-item" href={`/${locale}/${menuItem?.link}`} key={menuItem?.id} replace>{t(menuItem?.title)}</Link>
      ))}
    </Menu>
  );
};

export default PushMenu;
