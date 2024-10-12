import { useTranslations } from "next-intl";
import React from "react";
import AppButton from "../buttons/button.common";
import { Chevron } from "@/assets";
import { ButtonType, ButtonVariant } from "@/enum/enum";
import Link from "next/link";
import SocialMedia from "../ui/social-media";
import { getLocale, getTranslations } from "next-intl/server";
import { API_CLIENT } from "@/services";

const AppFooter = async () => {
  const locale = await getLocale();
  const t = await getTranslations("Common");
  const contactData = await API_CLIENT.fetchContact();
  return (
    <footer className="footer">
      <div className="app-container">
        <div className="top-sec">
          <div className="grid grid-cols-4 items-center">
            <div className="lg:col-span-2 col-span-4">
              <h4>{t("get_free_consultation")}</h4>
            </div>
            <div className="lg:col-span-2 col-span-4">
              <div className="flex lg:justify-end justify-center gap-4">
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
                <h3>Procedures</h3>
                <div className="grid grid-cols-2">
                  <div>
                    <ul>
                      <li>
                        <Link href="#">About Us</Link>
                      </li>
                      <li>
                        <Link href="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="#">Blog</Link>
                      </li>
                      <li>
                        <Link href="#">FAQ</Link>
                      </li>
                      <li>
                        <Link href="#">Packages</Link>
                      </li>
                      <li>
                        <Link href="#">Free Quote</Link>
                      </li>
                      <li>
                        <Link href="#">Sitemap</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <Link href={`${locale}/about`}>About Us</Link>
                      </li>
                      <li>
                        <Link href={`${locale}/contact`}>Contact Us</Link>
                      </li>
                      <li>
                        <Link href={`${locale}/blogs`}>Blog</Link>
                      </li>
                      <li>
                        <Link href={`${locale}/faq`}>FAQ</Link>
                      </li>
                      <li>
                        <Link href={`${locale}/procedures`}>Packages</Link>
                      </li>
                      <li>
                        <Link href={`${locale}/contact`}>Free Quote</Link>
                      </li>
                      <li>
                        <Link href={`${locale}/about`}>Sitemap</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
              <div className="footer-item md:mt-0 mt-4">
                <h3>Useful Links</h3>
                <ul>
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">FAQ</Link>
                  </li>
                  <li>
                    <Link href="#">Packages</Link>
                  </li>
                  <li>
                    <Link href="#">Free Quote</Link>
                  </li>
                  <li>
                    <Link href="#">Sitemap</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-item md:mt-0 mt-4">
                <h3>Contact Us</h3>
                <div className="footer-sec">
                  <h5>Email:</h5>
                  <h6>{contactData?.email}</h6>
                </div>
                <div className="footer-sec">
                  <h5>Whatsapp:</h5>
                  <h6>
                    {contactData?.primary_phone_number}
                    {contactData?.secondary_phone_number
                      ? `/ ${contactData?.secondary_phone_number}`
                      : ""}
                  </h6>
                </div>
                <div className="footer-sec">
                  <h5>Follow us:</h5>
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-sec">
          <div className="grid md:grid-cols-2 grid-cols-1 md:grid-flow-row grid-flow-row-dense items-center md:gap-0 gap-5">
            <div className="md:text-left text-center">
              <h6>
                Copyright © 2024 Asian Health Tourism. All Rights Reserved.
              </h6>
            </div>
            <div className="top-quick-links md:justify-end justify-center">
              <ul>
                <li>
                  <Link href="#">Privacy/Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms & Conditions</Link>
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
