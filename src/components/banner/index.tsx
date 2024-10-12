import React from "react";
import classNames from "classnames";
import { getLocale } from "next-intl/server";

import { UIComponent } from "@/models";
import { cardVariants } from "@/utils/cardanimate";
import { API_CLIENT } from "@/services";

import classes from "./banner.module.css";
import MotionDiv from "../common/motiondiv";
import useAppLocale from "@/hooks/useAppLocale";
import Image from "next/image";

const InnerBanner: React.FC<UIComponent.BannerProps> = async ({
  image,
  title,
  subTitle,
  page,
}) => {
  const banner = await API_CLIENT.fetchBanners(page);
  const locale = await getLocale();
  const { translate } = useAppLocale({ locale });
  const bgBanner = banner?.image || "";
  console.log("bgBanner: ", bgBanner);
  return (
    <div className={classNames(classes.bannerSec)}>
      <figure>
      <Image
        src={bgBanner}
        width={1200}
        height={300}
        alt={banner?.title_en || ""}
      />
      </figure>
      <div className="app-container">
        <MotionDiv animateScript={cardVariants} className={classes.content}>
          <h4>{translate("title", banner)}</h4>
          <div className={classes.subTitle}>
            <h5>{translate("caption", banner)}</h5>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default InnerBanner;
