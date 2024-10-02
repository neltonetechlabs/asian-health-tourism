"use client";
import { Fragment, useEffect, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { MasterLang } from "@/models/api.data";
import { API_CLIENT } from "@/services";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import Link from "next/link";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

interface LocaleSwitchProps {
  langs: MasterLang[];
}

const LocaleSwitch: React.FC<LocaleSwitchProps> = ({ langs = [] }) => {
  const [selectedLang, setSelectedLang] = useState(langs[0]);
  const locale = useLocale();
  const pathname = usePathname();
  const navigate = useRouter();

  useEffect(() => {
    if (locale) {
      const currentLang = langs?.find((lang) => lang?.code === locale);
      if (currentLang) setSelectedLang(currentLang);
    }
  }, [locale]);

  const newPathname = pathname.replace(/^\/(en|ar|ru|es|fr|fa)/, "");

  return (
    <Listbox value={selectedLang} onChange={setSelectedLang}>
      <ListboxButton>{selectedLang.language}</ListboxButton>
      <ListboxOptions
        className="bg-white rounded-sm p-2 shadow-sm top-4 z-10"
        anchor="bottom"
      >
        {langs.map((lang) => (
          <ListboxOption
            key={lang.id}
            value={lang}
            className="group flex gap-2 bg-white data-[focus]:bg-blue-100 py-1 cursor-pointer"
          >
            <Link href={`/${lang?.code}/${newPathname}`}>{lang.language}</Link>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default LocaleSwitch;
