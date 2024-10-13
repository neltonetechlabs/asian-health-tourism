"use client";
import { useEffect, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { MasterLang } from "@/models/api.data";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { en } from "@/assets";
import Image from "next/image";

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
      <ListboxButton>
        <div className="flex justify-between items-center gap-2">
          <figure className="flag-figure">
            <Image
              src={`/assets/images/${selectedLang?.code}.svg` || en}
              alt=""
              width={20}
              height={20}
            />
          </figure>
          {selectedLang?.language || ""}
        </div>
      </ListboxButton>
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
            <Link href={`/${lang?.code}/${newPathname}`}>
              <div className="flex justify-between items-center gap-2">
                <figure className="flag-figure">
                  <Image
                    src={`/assets/images/${lang?.code}.svg` || en}
                    alt=""
                    width={20}
                    height={20}
                  />
                </figure>
                <span>{lang.language}</span>
              </div>
            </Link>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default LocaleSwitch;
