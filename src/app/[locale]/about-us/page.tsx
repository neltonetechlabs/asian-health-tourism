import { AboutSection, CheckList, InnerBanner } from "@/components";
import classNames from "classnames";

import classes from "./about.module.css";
import { ImageWrapContent } from "@/components/templates";
import { Demo } from "@/assets";
import { NextPage } from "next";
import { API_CLIENT } from "@/services";
import { UIComponent } from "@/models";
import useAppLocale from "@/hooks/useAppLocale";

const demoItems = [
  "Patient online services (quote and consultation)",
  "Planning the highest international standards and quality hospitals and clinics (for all treatments and budgets)",
  "Appointing treatments by most skilled and internationally trained doctors and surgeons (most of doctors and surgeons have more than 10 years of experience with international degrees)",
  "Airport pick-up, pre-operative check-ups, 24-hours assistance, accommodation arrangements (for patients and their families)",
  "Pre-hospitalization and post-hospitalization high-quality healthcare services",
];

const demo = async (): Promise<string> => {
  return "";
};

const About: NextPage<UIComponent.DefaultPageParam> = async ({
  params: { locale },
}) => {
  const aboutContent = await API_CLIENT.fetchAbout();
  const { translate } = useAppLocale({ locale });
  return (
    <main className="about-page">
      <InnerBanner
        title="About Us"
        subTitle="Asian Health Tourism is the biggest medical tourism and healthcare service provider in Iran"
      />
      <section className="sec-padd">
        <div className="app-container">
          <AboutSection aboutcontent={aboutContent} locale={locale} />
        </div>
      </section>
      <section className={classNames("sec-padd", classes.blueSec)}>
        <div className="app-container">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className={classes.serviceBack}>
              <h3>{translate("title", aboutContent)}</h3>
            </div>
            <div>{translate("description", aboutContent)}</div>
          </div>
        </div>
      </section>
      <section className="sec-padd">
        <div className="app-container">
          <ImageWrapContent
            title="Request a Free Consultation"
            headerComp={
              <h4 className="large-head">
                Request a Free Consultation
              </h4>
            }
            image={aboutContent?.image || Demo}
            content={translate('free_consultation_description', aboutContent)}
            primaryBtnText="free consultation"
            primaryLink="/"
            secondaryBtnText="Contact Now"
            secondaryLink="/"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
