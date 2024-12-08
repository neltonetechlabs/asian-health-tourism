import { AboutSection, InnerBanner, MotionDiv } from "@/components";
import classNames from "classnames";
import { unstable_setRequestLocale } from "next-intl/server";

import classes from "./about.module.css";
import { ImageWrapContent } from "@/components/templates";
import { Demo } from "@/assets";
import { Metadata, NextPage } from "next";
import { API_CLIENT } from "@/services";
import { UIComponent } from "@/models";
import useAppLocale from "@/hooks/useAppLocale";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await API_CLIENT.fetchMetaData("about");

  return {
    title: metadata?.meta_title,
    description: metadata?.meta_description,
    keywords: metadata?.meta_keywords,
  };
}

const About: NextPage<UIComponent.DefaultPageParam> = async ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const aboutContent = await API_CLIENT.fetchAbout();
  
  const { translate } = useAppLocale({ locale });
  if (!aboutContent) return notFound();
  return (
    <main className="about-page">
      <InnerBanner page="about" />
      <section className="sec-padd">
        <div className="app-container">
          <AboutSection aboutcontent={aboutContent} locale={locale} />
        </div>
      </section>
      <MotionDiv className={classNames("sec-padd", classes.blueSec)}>
        <div className="app-container">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <MotionDiv className={classes.serviceBack}>
              <h3>{translate("title", aboutContent)}</h3>
            </MotionDiv>
            <MotionDiv className="about-html-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: translate("description", aboutContent) || "",
                }}
              ></div>
            </MotionDiv>
          </div>
        </div>
      </MotionDiv>
      <section className="sec-padd">
        <div className="app-container">
          <ImageWrapContent
            title="Request a Free Consultation"
            headerComp={
              <h4 className="large-head">Request a Free Consultation</h4>
            }
            image={aboutContent?.image || Demo}
            content={translate("free_consultation_description", aboutContent)}
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
