import { link } from "fs";
import { useTranslations } from "next-intl";
import Link from "next/link";

const main_menu = [
  {
    id: 0,
    title: "home",
    link: "/",
  },
  {
    id: 1,
    title: "procedure",
    link: "",
  },
  {
    id: 2,
    title: "packages",
    link: "",
  },
  {
    id: 3,
    title: "destination",
    link: "",
  },
  {
    id: 4,
    title: "patient",
    link: "",
  },
  {
    id: 5,
    title: "reviews",
    link: "",
  },
  {
    id: 6,
    title: "blog",
    link: "",
  },
  {
    id: 7,
    title: "about",
    link: "",
  },
];

const Menu: React.FC<{}> = () => {
  const t = useTranslations("MainMenu");
  return (
    <ul className="menu-ul">
      {main_menu?.map((menuItem) => (
        <li key={menuItem?.id}>
          <Link href={menuItem?.link}>{t(menuItem?.title)}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
