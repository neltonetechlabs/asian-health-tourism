import { useLocale, useTranslations } from "next-intl";
import ActiveLink from "./activelink";

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

const Menu: React.FC<{}> = () => {
  const t = useTranslations("MainMenu");
  const locale = useLocale();

  return (
    <ul className="menu-ul">
      {main_menu?.map((menuItem) => (
        <li key={menuItem?.id}>
          <ActiveLink link={menuItem?.link} title={t(menuItem?.title)} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
