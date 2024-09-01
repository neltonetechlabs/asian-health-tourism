import { getImageProps } from "next/image";

import { UIComponent } from "@/models";

const Picture: React.FC<UIComponent.PictureCompProps> = ({
  desktopImg,
  mobileImg,
}) => {
  const common = { alt: "Slider", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 875,
    quality: 80,
    src: desktopImg,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1334,
    quality: 70,
    src: mobileImg,
  });

  return (
    <picture>
      <source media="(min-width: 767px)" srcSet={desktop} />
      <source media="(min-width: 576px)" srcSet={mobile} />
      <img {...rest} style={{ width: "100%", height: "auto" }} />
    </picture>
  );
};

export default Picture;
