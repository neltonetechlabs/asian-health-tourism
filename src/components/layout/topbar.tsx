import { PhoneIcon } from "@/assets";
import Image from "next/image";
import LocaleSwitch from "./locale";
import Link from "next/link";
import { fetchMasterLangs } from "@/services/cms.service";

const TopBar: React.FC<{}> = async () => {
  const langs = await fetchMasterLangs();

  return (
    <div className="topbar">
      <div className="app-container">
        <div className="top-bar-content">
          <div className="top-quick-links">
            <ul>
              <li>
                <Link href="/">Gallery</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="top-contact">
            <Image alt="090809" src={PhoneIcon} />
            <h6>+91 1234 5678 910</h6>
          </div>
          <LocaleSwitch langs={langs} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
