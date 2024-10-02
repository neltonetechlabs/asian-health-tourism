import { link } from "fs";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

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
    link: "",
  },
  {
    id: 6,
    title: "blog",
    link: "blog",
  },
  {
    id: 7,
    title: "about",
    link: "about-us",
  },
];

const Menu: React.FC<{}> = () => {
  const t = useTranslations("MainMenu");
  const locale = useLocale();
  return (
    <ul className="menu-ul">
      {main_menu?.map((menuItem) => (
        <li key={menuItem?.id}>
          <Link href={`/${locale}/${menuItem?.link}`}>{t(menuItem?.title)}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
