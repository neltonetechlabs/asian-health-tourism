import React from "react";
import classes from "./banner.module.css";

import { UIComponent } from "@/models";
import { url } from "inspector";

const InnerBanner: React.FC<UIComponent.BannerProps> = ({
  image,
  title,
  subTitle,
}) => {
  return (
    <section className={classes.bannerSec} style={{ backgroundImage: url(image)  }}>
      <div className="app-container">
        <div className={classes.content}>
          <h4>{title}</h4>
          <div className={classes.subTitle}>
            <h5>{subTitle}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;
