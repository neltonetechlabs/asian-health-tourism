import Image from "next/image";
import Link from "next/link";

import { BlueChevron } from "@/assets";
import { UIComponent } from "@/models";


const SectionHeadLink: React.FC<UIComponent.SectionLink> = ({ title, to }) => {
  return (
    <Link href={to} className="link-btn">
      <span>{title}</span>
      <Image src={BlueChevron} alt={title} />
    </Link>
  );
};

export default SectionHeadLink;
