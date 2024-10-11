import Image from "next/image";

import { UIComponent } from "@/models";
import AppButton from "@/components/buttons/button.common";
import { ButtonType, ButtonVariant } from "@/enum/enum";
import { BlueChevron, Chevron } from "@/assets";

import classes from "./style.module.css";
import MotionDiv from "@/components/common/motiondiv";

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
    <MotionDiv className="grid grid-cols-12 justify-center">
      <div className="col-span-1"></div>
      <div className={classes.imgwrapsec}>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 items-center">
          <MotionDiv className={classes.imageWrap}>
            <Image src={image} alt={title} width={600} height={600} />
          </MotionDiv>
          <MotionDiv className={classes.contentWrap}>
            {headerComp ? headerComp : <h4>{title}</h4>}
            <MotionDiv><article>{content}</article></MotionDiv>
            <MotionDiv className={classes.actionSec}>
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
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </MotionDiv>
  );
};

export default ImageWrapContent;
