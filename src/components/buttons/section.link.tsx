import Image from "next/image";
import Link from "next/link";

import { BlueChevron } from "@/assets";
import { UIComponent } from "@/models";
import classNames from "classnames";

const SectionHeadLink: React.FC<UIComponent.SectionLink> = ({
  title,
  to,
  isMobile = false,
}) => {
  return (
    <Link
      href={to}
      className={classNames("link-btn", { "only-mobile": isMobile })}
    >
      <span>{title}</span>
      <Image src={BlueChevron} alt={title} />
    </Link>
  );
};

export default SectionHeadLink;
