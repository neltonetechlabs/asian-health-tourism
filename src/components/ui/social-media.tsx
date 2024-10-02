"use client";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Thread, LinkedIn } from "@/assets";

const SocialMedia = () => {
  return (
    <ul className="flex justify-start gap-10 items-center ">
      <li>
        <Image src={Facebook} alt="Facebook" />
      </li>
      <li>
        <Image src={Instagram} alt="Instagram" />
      </li>
      <li>
        <Image src={Youtube} alt="Youtube" />
      </li>
      <li>
        <Image src={Thread} alt="Thread" />
      </li>
      <li>
        <Image src={LinkedIn} alt="LinkedIn" />
      </li>
    </ul>
  );
};

export default SocialMedia;
