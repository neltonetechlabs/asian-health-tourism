"use client";
import classNames from "classnames";

import { ButtonType, ButtonVariant } from "@/enum/enum";
import { UIComponent } from "@/models";
import Image from "next/image";

const AppButton: React.FC<UIComponent.ButtonProps> = ({
  title = "Click Me",
  onClick,
  rightImage,
  leftImage,
  type = ButtonType.FILLED,
  customClass = "",
  variant,
}) => {
  return (
    <button
      className={classNames(
        "app-btn",
        {
          ["btn-filled"]: type === ButtonType.FILLED,
          ["btn-stroke"]: type === ButtonType.STROKE,
          ["btn-left-icon"]: leftImage,
          ["btn-right-icon"]: rightImage,
        },
        customClass
      )}
      title={title}
      style={{ backgroundColor: variant || "transparent" }}
    >
      {rightImage && (
        <div className="right-icon">
          <Image src={rightImage} alt={title} />
        </div>
      )}
      {title}
      {leftImage && (
        <span>
          <Image src={leftImage} alt={title} />
        </span>
      )}
    </button>
  );
};

export default AppButton;
