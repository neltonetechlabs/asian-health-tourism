import { useTranslations } from "next-intl";
import React from "react";
import AppButton from "../buttons/button.common";
import { Chevron } from "@/assets";
import { ButtonType, ButtonVariant } from "@/enum/enum";
import Link from "next/link";
import SocialMedia from "../ui/social-media";
import { getLocale, getTranslations } from "next-intl/server";
import { API_CLIENT } from "@/services";
import useAppLocale from "@/hooks/useAppLocale";

const AppFooter = async () => {
  const locale = await getLocale();
  const { translate } = useAppLocale({ locale });
  const t = await getTranslations("Common");
  const main = await getTranslations("MainMenu");
  const contact = await getTranslations("ContactPg");
  const contactData = await API_CLIENT.fetchContact();
  const procedureLinks = await API_CLIENT.fetchFooterLinks();
  return (
    <footer className="footer">
      <div className="app-container">
        <div className="top-sec">
          <div className="grid grid-cols-4 items-center">
            <div className="lg:col-span-2 col-span-4">
              <h4>{t("get_free_consultation")}</h4>
            </div>
            <div className="lg:col-span-2 col-span-4">
              <div className="footer-action-btn">
                <AppButton
                  title="free consultation"
                  type={ButtonType.FILLED}
                  variant={ButtonVariant.PRIMARY}
                  leftImage={Chevron}
                />
                <AppButton
                  title="contact now"
                  type={ButtonType.STROKE}
                  leftImage={Chevron}
                  customClass="text-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main-sec">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="md:col-span-1 col-span-2">
              <div className="footer-item">
                <h3>{main("procedure")}</h3>
                <div className="grid grid-cols-2">
                  <div>
                    <ul>
                      {procedureLinks?.slice(0, 7)?.map((procedure) => (
                        <li key={procedure?.slug}>
                          <Link href={`/${locale}/procedures/${procedure?.pckg_category}/${procedure?.slug}`}>
                            {translate("title", procedure)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul>
                      {procedureLinks?.slice(7, 14)?.map((procedure) => (
                        <li key={procedure?.slug}>
                          <Link href={`/${locale}/procedures/${procedure?.pckg_category}/${procedure?.slug}`}>
                            {translate("title", procedure)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-2">
              <div className="footer-item md:mt-0 mt-2">
                <h3>Usefull Links</h3>
                <ul>
                  <li>
                    <Link href={`/${locale}/about-us`}>{main("about")}</Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/contact`}>{main("contact")}</Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/blogs`}>{main("blog")}</Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/faq`}>{main("faq")}</Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/procedures`}>
                      {main("procedure")}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/contact`}>
                      {main("free_consultation")}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/sitemap.xml`} target="_blank" rel="noreferrer">{main("sitemap")}</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-item md:mt-0 mt-2">
                <h3>{main("contact")}</h3>
                <div className="footer-sec">
                  <h5>{contact("email")}:</h5>
                  <h6>{contactData?.email}</h6>
                </div>
                <div className="footer-sec">
                  <h5>{contact("whatsapp")}:</h5>
                  <h6>
                    {contactData?.primary_phone_number}
                    {contactData?.secondary_phone_number
                      ? `/ ${contactData?.secondary_phone_number}`
                      : ""}
                  </h6>
                </div>
                <div className="footer-sec">
                  <h5>{t("follow_us")}:</h5>
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-sec">
          <div className="grid md:grid-cols-2 grid-cols-1 md:grid-flow-row grid-flow-row-dense items-center md:gap-0 gap-5">
            <div className="text-left">
              <h6>
                Copyright © {new Date().getFullYear()} Asian Health Tourism. All
                Rights Reserved.
              </h6>
            </div>
            <div className="top-quick-links md:justify-end justify-center">
              <ul>
                <li>
                  <Link href="#">{main("privacy")}</Link>
                </li>
                <li>
                  <Link href="#">{main("terms")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
