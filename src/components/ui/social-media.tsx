import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";

import { Facebook, Instagram, Youtube, Thread, LinkedIn } from "@/assets";
import { API_CLIENT } from "@/services";
import classNames from "classnames";

interface SocialMediaProps {
  invert?: boolean;
}

const SocialMedia: NextComponentType<{}, {}, SocialMediaProps> = async ({
  invert = false,
}) => {
  const links = await API_CLIENT.fetchSocialMedia();
  return (
    <ul
      className={classNames("flex justify-start gap-10 items-center", {
        ["invert"]: invert,
      })}
    >
      {links?.facebook && (
        <li>
          <Link href={links?.facebook} target="_blank">
            <Image src={Facebook} alt="Facebook" />
          </Link>
        </li>
      )}
      {links?.instagram && (
        <li>
          <Link href={links?.instagram} target="_blank">
            <Image src={Instagram} alt="Instagram" />
          </Link>
        </li>
      )}
      {links?.youtube && (
        <li>
          <Link href={links?.youtube} target="_blank">
            <Image src={Youtube} alt="Youtube" />
          </Link>
        </li>
      )}
      {links?.linkedin && (
        <li>
          <Link href={links?.thread} target="_blank">
            <Image src={Thread} alt="Thread" />
          </Link>
        </li>
      )}
      {links?.linkedin && (
        <li>
          <Link href={links?.linkedin} target="_blank">
            <Image src={LinkedIn} alt="LinkedIn" />
          </Link>
        </li>
      )}
    </ul>
  );
};

export default SocialMedia;
