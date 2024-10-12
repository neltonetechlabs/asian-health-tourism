import { PhoneIcon } from "@/assets";
import Image from "next/image";
import LocaleSwitch from "./locale";
import Link from "next/link";
import { fetchMasterLangs } from "@/services/cms.service";
import { UIComponent } from "@/models";
import { NextPage } from "next";
import { getLocale } from "next-intl/server";
import { API_CLIENT } from "@/services";

const TopBar: React.FC<{}> = async () => {
  const langs = await fetchMasterLangs();
  const locale = await getLocale();
  const contact = await API_CLIENT.fetchContact();
  return (
    <div className="topbar">
      <div className="app-container">
        <div className="top-bar-content">
          <div className="top-quick-links">
            <ul>
             
              <li>
                <Link href={`/${locale}/faq`}>FAQ</Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="top-contact">
            <Image alt="090809" src={PhoneIcon} />
            <h6>{contact?.primary_phone_number}</h6>
          </div>
          <LocaleSwitch langs={langs} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
