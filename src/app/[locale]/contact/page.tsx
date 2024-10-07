import { NextPage } from "next";
import { getTranslations } from "next-intl/server";

import { UIComponent } from "@/models";
import { AppButton, InnerBanner } from "@/components";
import SocialMedia from "@/components/ui/social-media";

import style from "./style.module.css";
import classNames from "classnames";
import FloatingInput from "@/components/forms/floatinput";
import { Chevron } from "@/assets";
import { ButtonType, ButtonVariant } from "@/enum/enum";

const ContactPage: NextPage<UIComponent.DefaultPageParam> = async ({
  params: { locale },
}) => {
  const t = await getTranslations("ContactPg");
  return (
    <main>
      <InnerBanner
        title="Contact Us"
        subTitle="Asian Health Tourism is the biggest medical tourism and healthcare service provider in Iran"
      />
      <section className="sec-padd">
        <div className="app-container">
          <div className="mb-6">
            <h3 className={style.contactHeader}>{t("page_head")}</h3>
          </div>
          <div className="grid grid-cols-12">
            <div className={style.contactDataSec}>
              <div className={style.contactData}>
                <h4>{t("address_label")}</h4>
                <h6>118 Kazim Kazimzade St, Baku. +990123456789</h6>
              </div>
              <div className={style.contactData}>
                <h4>{t("phone_label")}</h4>
                <h6>+990123456789 / +990123456789</h6>
              </div>
              <div className={style.contactData}>
                <h4>{t("email")}</h4>
                <h6>info@asianhealthtourism.com</h6>
              </div>
              <div className={style.contactData}>
                <h4>{t("social_media")}</h4>
                <SocialMedia />
              </div>
            </div>
            <div className="lg:col-span-7 col-span-12">
              <form className={style.contactForm}>
                <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                  <div className={style.radioBtn}>
                    <label>
                      <input type="radio" name="e" defaultChecked /> {t("radio_enquiry")}
                    </label>
                    <label>
                      <input type="radio" name="e" /> {t("radio_feedback")}
                    </label>
                  </div>
                  <div className={style.formgrp}>
                    <FloatingInput
                      name="name"
                      inputKey="enter_name"
                      label={t("name_label")}
                    />
                  </div>
                  <div className={style.formgrp}>
                    <FloatingInput
                      name="phone"
                      inputKey="enter_phone"
                      label={t("phone_inp_label")}
                    />
                  </div>
                  <div className="col-span-2">
                    <FloatingInput
                      name="phone"
                      inputKey="enter_phone"
                      label={t("email_inp_label")}
                    />
                  </div>
                  <div className="col-span-2">
                    <FloatingInput
                      name="message"
                      inputKey="message"
                      label={t("message")}
                      inputType="text"
                    />
                  </div>
                  <div className="flex md:gap-10 gap-4 col-span-2">
                    <AppButton
                      title="Submit Message"
                      type={ButtonType.FILLED}
                      variant={ButtonVariant.PRIMARY}
                      leftImage={Chevron}
                    />
                    <button type="button">Our Location Map</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
