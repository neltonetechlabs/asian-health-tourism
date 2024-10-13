import { Metadata, NextPage } from "next";
import { getTranslations } from "next-intl/server";

import { UIComponent } from "@/models";
import { AppButton, InnerBanner, MotionDiv } from "@/components";
import SocialMedia from "@/components/ui/social-media";

import style from "./style.module.css";
import FloatingInput from "@/components/forms/floatinput";
import { Chevron } from "@/assets";
import { ButtonType, ButtonVariant } from "@/enum/enum";
import { API_CLIENT } from "@/services";
import useAppLocale from "@/hooks/useAppLocale";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await API_CLIENT.fetchMetaData("contact");

  return {
    title: metadata?.meta_title,
    description: metadata?.meta_description,
    keywords: metadata?.meta_keywords,
  };
}


const ContactPage: NextPage<UIComponent.DefaultPageParam> = async ({
  params: { locale },
}) => {
  const t = await getTranslations("ContactPg");
  const contactData = await API_CLIENT.fetchContact();
  const { translate } = useAppLocale({ locale });
  return (
    <main>
      <InnerBanner page="contact" />
      <section className="sec-padd">
        <div className="app-container">
          <MotionDiv className="mb-6">
            <h3 className={style.contactHeader}>{t("page_head")}</h3>
          </MotionDiv>
          <div className="grid grid-cols-12">
            <div className={style.contactDataSec}>
              <MotionDiv>
                <div className={style.contactData}>
                  <h4>{t("address_label")}</h4>
                  <h6>{translate("address", contactData)}</h6>
                </div>
                <div className={style.contactData}>
                  <h4>{t("phone_label")}</h4>
                  <h6>
                    {contactData?.primary_phone_number}
                    {contactData?.secondary_phone_number
                      ? `/ ${contactData?.secondary_phone_number}`
                      : ""}
                  </h6>
                </div>
                <div className={style.contactData}>
                  <h4>{t("email")}</h4>
                  <h6>{contactData?.email}</h6>
                </div>
                <div className={style.contactData}>
                  <h4 className={style.socioHead}>{t("social_media")}</h4>
                  <SocialMedia invert />
                </div>
              </MotionDiv>
            </div>
            <div className="lg:col-span-7 col-span-12">
              <MotionDiv>
                <form className={style.contactForm}>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                    <div className={style.radioBtn}>
                      <label>
                        <input type="radio" name="e" defaultChecked />{" "}
                        {t("radio_enquiry")}
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
              </MotionDiv>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
