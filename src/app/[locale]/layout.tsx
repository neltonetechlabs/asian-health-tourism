import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "@/css/fontello/css/fontello.css";
import 'lenis/dist/lenis.css'
import { Header, TopBar } from "@/components";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import Link from "next/link";
import { ChatPrimary, Whatsapp } from "@/assets";
import AppFooter from "@/components/layout/footer";
import { Suspense } from "react";
import SuspenseLoader from "@/components/ui/suspense";
import { NextIntlClientProvider } from "next-intl";
import ScrollContext from "@/components/wrapper/scrollcontext";
import Script from "next/script";

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: '#0078bd',
}

export const metadata: Metadata = {
  title: "Asian Health Tourism",
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
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <NextIntlClientProvider messages={messages}>
        <body className={opensans.className}>
          <Suspense fallback={<SuspenseLoader />}>
          <ScrollContext>
            <TopBar />
            <Header />
            {children}
            <div className="aside-chat-option">
              <ul className="appearance-none flex flex-col gap-4">
                <li>
                  <Link href="/" className="rotate-hover">
                    <Image src={Whatsapp} alt="ChatNow" />
                  </Link>
                </li>
                <li>
                  <Link href="/" className="rotate-hover">
                    <Image src={ChatPrimary} alt="ChatNow" />
                  </Link>
                </li>
              </ul>
            </div>
            <AppFooter />
            </ScrollContext>
          </Suspense>
          <Script
            src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js"
            strategy="beforeInteractive"
          ></Script>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
