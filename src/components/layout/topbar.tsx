import { PhoneIcon } from "@/assets";
import Image from "next/image";
import LocaleSwitch from "./locale";
import Link from "next/link";
import { ContactData, MasterLang } from "@/models/api.data";

const TopBar: React.FC<{ langs: MasterLang[]; locale: string, contact: ContactData | null }> = (props) => {
  const { langs, locale = "en", contact } = props;
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
            <Image alt={contact?.primary_phone_number || "Asian Health Tourism"} src={PhoneIcon} />
            <h6>{contact?.primary_phone_number}</h6>
          </div>
          <LocaleSwitch langs={langs} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
