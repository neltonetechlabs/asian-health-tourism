"use client";
import classNames from "classnames";
import Image from "next/image";

import { ButtonType } from "@/enum/enum";
import { UIComponent } from "@/models";
import Link from "next/link";
import { useLocale } from "next-intl";

const AppButton: React.FC<UIComponent.ButtonProps> = ({
  title = "Click Me",
  onClick,
  rightImage,
  leftImage,
  type = ButtonType.FILLED,
  customClass = "",
  variant,
  linkUrl = "contact",
}) => {
  const locale = useLocale();
  return (
    <Link
      href={`/${locale}/${linkUrl}`}
      className={classNames(
        "app-btn",
        {
          ["btn-filled"]: type === ButtonType.FILLED,
          ["btn-stroke"]: type === ButtonType.STROKE,
          ["btn-stroke-sec"]: type === ButtonType.STROKE_ALT,
          ["btn-left-icon"]: leftImage,
          ["btn-right-icon"]: rightImage,
        },
        customClass
      )}
      title={title}
      style={{ backgroundColor: variant || "transparent" }}
    >
      <div className="btn-content">
        {rightImage && (
          <div className="right-icon">
            <Image src={rightImage} alt={title} />
          </div>
        )}
        {title}
        {leftImage && (
          <span className="left-icon">
            <Image src={leftImage} alt={title} />
          </span>
        )}
      </div>
    </Link>
  );
};

export default AppButton;
