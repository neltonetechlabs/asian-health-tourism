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
  TestimonialCarousel,
  TestimonialSection,
} from "@/components";
import Image from "next/image";
import { CountryIcon, PrideBg, PrideIcon, SupportIcon } from "@/assets";
import useAppLocale from "@/hooks/useAppLocale";
import { UIComponent } from "@/models";
import { NextPage } from "next";
import { getTranslations } from "next-intl/server";
import { cardVariants } from "@/utils/cardanimate";

const Home: NextPage<UIComponent.DefaultPageParam> = async ({
  params: { locale },
}) => {
  const t = await getTranslations("Common");
  const { translate } = useAppLocale({ locale });
  return (
    <>
      <HeroSlider />
      <MotionDiv className="feature-sec" animateScript={cardVariants}>
        <div className="app-container">
          <FeatureCaro />
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
            <AboutSection />
          </div>
        </div>
      </section>

      <section className="sec-padd">
        <div className="app-container">
          <div className="heading-sec mb-16">
            <h3>{t("product_name")}</h3>
            <h6>{t("product_tag")}</h6>
          </div>
          <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </section>

      <section className="pride-sec">
        <div className="app-container">
          <div className="bg-image">
            <Image alt="" src={PrideBg} />
          </div>
          <div className="pride-content">
            <h2>{t("pride_head")}</h2>
            <h6>{t("pride_content")}</h6>
          </div>
        </div>
      </section>
      <section className="pride-count">
        <div className="app-container">
          <div className="pride-count-cards">
            <div className="xl:col-span-2 lg:block lg:col-span-1 hidden"></div>
            <PrideCard count="08" title={t("lang_support")} icon={PrideIcon} />
            <PrideCard
              count="1500+"
              title={t("online_consult")}
              icon={SupportIcon}
            />
            <PrideCard
              count="750+"
              title={t("country_wide")}
              icon={CountryIcon}
            />
          </div>
        </div>
      </section>

      <TestimonialSection />
      <LatestBlog />
    </>
  );
};

export default Home;
