import type { Metadata } from "next";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Header, TopBar } from "@/components";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import Link from "next/link";
import { ChatPrimary, Whatsapp } from "@/assets";

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={opensans.className}>
        <TopBar />
        <Header />
        {children}
        <div className="aside-chat-option">
          <ul className="appearance-none flex flex-col gap-4">
          <li>
              <Link href="/">
                <Image src={Whatsapp} alt="ChatNow" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={ChatPrimary} alt="ChatNow" />
              </Link>
            </li>
          </ul>
        </div>
      </body>
    </html>
  );
}
