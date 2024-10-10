import Image from "next/image";

import { UIComponent } from "@/models";
import AppButton from "@/components/buttons/button.common";
import { ButtonType, ButtonVariant } from "@/enum/enum";
import { BlueChevron, Chevron } from "@/assets";

import classes from "./style.module.css";

const ImageWrapContent: React.FC<UIComponent.ImageWrapTemplProps> = ({
  image,
  headerComp,
  title,
  content,
  primaryBtnText,
  primaryLink,
  secondaryBtnText,
  secondaryLink,
}) => {
  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-1"></div>
      <div className={classes.imgwrapsec}>
        <div className="grid grid-cols-2 gap-20 items-center">
          <div className={classes.imageWrap}>
            <Image src={image} alt={title} width={600} height={600} />
          </div>
          <div className={classes.contentWrap}>
            {headerComp ? headerComp : <h4>{title}</h4>}
            <article>{content}</article>
            <div className={classes.actionSec}>
              {primaryBtnText && primaryLink ? (
                <AppButton
                  title={primaryBtnText}
                  type={ButtonType.FILLED}
                  leftImage={Chevron}
                  variant={ButtonVariant.PRIMARY}
                />
              ) : null}
              {secondaryBtnText && secondaryLink ? (
                <AppButton
                  title={secondaryBtnText}
                  type={ButtonType.STROKE_ALT}
                  leftImage={BlueChevron}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWrapContent;
