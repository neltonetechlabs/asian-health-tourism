import { useLocale, useTranslations } from "next-intl";
import ActiveLink from "./activelink";
import { API_CLIENT } from "@/services";

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

const Menu: React.FC<{ settings: any }> = ({ settings }) => {
  const t = useTranslations("MainMenu");
  const locale = useLocale();

  return (
    <ul className="menu-ul">
      {main_menu?.map((menuItem) => {
        // Check if the link is present in the visibility object
        const modifiedLink = settings.hasOwnProperty(menuItem?.link)
          ? settings[menuItem?.link]
          : true;
        if (modifiedLink) {
          return (
            <li key={menuItem?.id}>
              <ActiveLink link={menuItem.link} title={t(menuItem?.title)} />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Menu;
