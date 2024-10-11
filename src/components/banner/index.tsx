import React from "react";
import classes from "./banner.module.css";

import { UIComponent } from "@/models";
import { url } from "inspector";
import classNames from "classnames";
import MotionDiv from "../common/motiondiv";
import { cardVariants } from "@/utils/cardanimate";

const InnerBanner: React.FC<UIComponent.BannerProps> = ({
  image,
  title,
  subTitle,
}) => {
  return (
    <div className={classNames(classes.bannerSec, "bg-[url('https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg')] bg-cover bg-top")}>
      <div className="app-container">
        <MotionDiv animateScript={cardVariants} className={classes.content}>
          <h4>{title}</h4>
          <div className={classes.subTitle}>
            <h5>{subTitle}</h5>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default InnerBanner;
