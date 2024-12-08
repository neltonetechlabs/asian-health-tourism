import { getImageProps } from "next/image";

import { UIComponent } from "@/models";

const Picture: React.FC<UIComponent.PictureCompProps> = ({
  desktopImg,
  mobileImg,
}) => {
  return (
    <picture>
      <source media="(min-width: 677px)" srcSet={desktopImg} />
      <source media="(min-width: 676px)" srcSet={mobileImg} />
      <img alt="Asia Health Tourism" src={mobileImg} style={{ width: "100%", height: "auto" }} loading="lazy"  />
    </picture>
  );
};

export default Picture;
