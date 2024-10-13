import { useTranslations } from "next-intl";

import {
  AboutSection,
  FeatureCaro,
  HeroSlider,
  LatestBlog,
  MotionDiv,
  PackageCard,
  PrideCard,
  SectionHead,
  ServiceCard,
  TestimonialSection,
} from "@/components";
import Image from "next/image";
import { CountryIcon, PrideBg, PrideIcon, SupportIcon } from "@/assets";
import useAppLocale from "@/hooks/useAppLocale";
import { UIComponent } from "@/models";
import { Metadata, NextPage } from "next";
import { getTranslations } from "next-intl/server";
import { cardVariants } from "@/utils/cardanimate";
import { API_CLIENT } from "@/services";
import { ServiceHomePage } from "@/models/api.data";

const animateScript = {
  ...cardVariants,
  onscreen: {
    ...cardVariants?.onscreen,
    transition: {
      ...cardVariants?.transition,
      delay: 0.2,
    },
  },
};


export async function generateMetadata(
): Promise<Metadata> {
  const metadata = await API_CLIENT.fetchMetaData("home");

  return {
    title: metadata?.meta_title,
    description: metadata?.meta_description,
    keywords: metadata?.meta_keywords,
  };
}

const Home: NextPage<UIComponent.DefaultPageParam> = async ({
  params: { locale },
}) => {
  const t = await getTranslations("Common");
  const { translate } = useAppLocale({ locale });

  const [
    sliders,
    services,
    homecount,
    homeSpeciality,
    aboutContent,
    blog_list,
  ] = await Promise.all([
    API_CLIENT.fetchSliders(),
    API_CLIENT.fetchServices(),
    API_CLIENT.fetchHomeCount(),
    API_CLIENT.fetchHomeSpecialities(),
    API_CLIENT.fetchAbout(),
    API_CLIENT.fetchBlogs(),
  ]);

  return (
    <>
      <HeroSlider sliders={sliders} />
      <MotionDiv className="feature-sec" animateScript={animateScript}>
        <div className="app-container">
          <FeatureCaro locale={locale} specialities={homeSpeciality} />
        </div>
      </MotionDiv>
      <section className="sec-wrap pb-20">
        <div className="app-container">
          <SectionHead
            title={t("top_packages_iran")}
            rightTitle={t("see_all_package")}
            rightTarget="/"
          />
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-8 mt-12">
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
          </div>
        </div>
      </section>
      <section className="parallax-sec">
        <div className="app-container">
          <div className="parallax-sec-content">
            <AboutSection locale={locale} aboutcontent={aboutContent} />
          </div>
        </div>
      </section>

      <section className="sec-padd">
        <div className="app-container">
          <MotionDiv animateScript={cardVariants} className="heading-sec mb-16">
            <h3>{t("product_name")}</h3>
            <h6>{t("product_tag")}</h6>
          </MotionDiv>
          <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {services?.map((service: ServiceHomePage, index: number) => (
              <ServiceCard
                delay={0.01 + index}
                key={service?.id}
                count={index}
                serviceItem={service}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pride-sec">
        <div className="app-container">
          <div className="bg-image">
            <Image
              alt="Asian Health Tourism"
              src={homecount?.image || PrideBg}
              width={1200}
              height={400}
            />
          </div>
          <MotionDiv animateScript={cardVariants} className="pride-content">
            <h2>{translate("title", homecount)}</h2>
            <h6>{translate("caption", homecount)}</h6>
          </MotionDiv>
        </div>
      </section>
      <section className="pride-count">
        <div className="app-container">
          <div className="pride-count-cards">
            <div className="xl:col-span-2 lg:block lg:col-span-1 hidden"></div>
            <PrideCard
              delay={0.3}
              count={`${homecount?.languages_supported}+` || ""}
              title={t("lang_support")}
              icon={PrideIcon}
            />
            <PrideCard
              count={`${homecount?.online_consultations}+` || ""}
              title={t("online_consult")}
              icon={SupportIcon}
              delay={0.6}
            />
            <PrideCard
              count={`${homecount?.countries}+` || ""}
              title={t("country_wide")}
              icon={CountryIcon}
              delay={0.8}
            />
          </div>
        </div>
      </section>

      <TestimonialSection />
      <LatestBlog latestBlogs={blog_list} locale={locale} />
    </>
  );
};

export default Home;
