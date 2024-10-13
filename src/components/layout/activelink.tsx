"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink: React.FC<{link: string, title: string, className?: string}> = ({
    link,
    title,
    className = "link"
}) => {
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <Link
      className={`${className} ${pathname === `/${locale}/${link}` ? "active" : ""}`}
      href={`/${locale}/${link}`}
      replace
      prefetch
    >
      {title}
    </Link>
  );
};

export default ActiveLink;
