import { useTranslations } from "next-intl";
import React from "react";
import AppButton from "../buttons/button.common";
import { Chevron } from "@/assets";
import { ButtonType, ButtonVariant } from "@/enum/enum";
import Link from "next/link";
import SocialMedia from "../ui/social-media";

const AppFooter = () => {
  const t = useTranslations("Common");
  return (
    <footer className="footer">
      <div className="app-container">
        <div className="top-sec">
          <div className="grid grid-cols-4 items-center">
            <div className="md:col-span-2 col-span-4">
              <h4>{t("get_free_consultation")}</h4>
            </div>
            <div className="md:col-span-2 col-span-4">
              <div className="flex justify-end gap-4">
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
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="footer-item md-mt-0 mt-4">
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
                  <h6>info@asianhealthtourism.com</h6>
                </div>
                <div className="footer-sec">
                  <h5>Whatsapp:</h5>
                  <h6>+990123456789 / +990123456789</h6>
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
              <h6>Copyright © 2024 Asian Health Tourism. All Rights Reserved.</h6>
            </div>
            <div className="top-quick-links md:justify-end justify-center">
              <ul>
                <li><Link href="#">Privacy/Policy</Link></li>
                <li><Link href="#">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
