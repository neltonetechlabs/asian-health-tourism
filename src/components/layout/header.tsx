import Image from "next/image";

import { appConfig } from "@/config";
import { ChatIcon, Logo } from "@/assets";
import Menu from "./menu";
import Search from "./search";
import { ButtonType, ButtonVariant } from "@/enum/enum";
import AppButton from "../buttons/button.common";

const Header = () => {
  return (
    <header>
      <div className="app-container">
        <div className="grid grid-cols-12 items-center">
          <div className="xl:col-span-3 col-span-2">
            <figure className="logo-fig">
              <Image alt={appConfig?.appname} src={Logo} />
            </figure>
          </div>
          <div className="xl:col-span-9 col-span-10">
            <div className="header-actions">
              <Menu />
              <Search />
              <AppButton
                title="free consultation"
                type={ButtonType.STROKE}
                variant={ButtonVariant.LIGHT}
                rightImage={ChatIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
