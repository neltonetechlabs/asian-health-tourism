import Image from "next/image";

import { appConfig } from "@/config";
import { ChatIcon, Logo } from "@/assets";
import Menu from "./menu";
import Search from "./search";
import { ButtonType, ButtonVariant } from "@/enum/enum";
import AppButton from "../buttons/button.common";
import { fetchMasterLangs } from "@/services/cms.service";
import PushMenu from "./pushmenu";
import Link from "next/link";
import Locale from "./locale";
import { MasterLang } from "@/models/api.data";

interface HeaderProps {
  langs: MasterLang[];
}

const Header: React.FC<HeaderProps> = (props) => {
  const { langs } = props;
  return (
    <header className="sticky top-0 bg-white z-30">
      <div className="app-container">
        <div className="grid grid-cols-12 items-center">
          <div className="xl:col-span-3 lg:col-span-2 col-span-6">
            <Link href="/">
              <figure className="logo-fig">
                <Image alt={appConfig?.appname} src={Logo} />
              </figure>
            </Link>
          </div>
          <div className="xl:col-span-9 lg:col-span-10 col-span-6">
            <div className="header-actions">
              <Menu />
              <div className="mobile-locale visible-mob">
                <Locale langs={langs} />
              </div>
              <Search />
              <AppButton
                title="free consultation"
                type={ButtonType.STROKE}
                variant={ButtonVariant.LIGHT}
                rightImage={ChatIcon}
                linkUrl={"contact"}
                customClass="free_cons_btn"
              />
              <div className="mobile-menu">
                <PushMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
