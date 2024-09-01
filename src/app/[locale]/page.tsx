import { useTranslations } from "next-intl";

import {
  AboutSection,
  FeatureCaro,
  HeroSlider,
  PackageCard,
  PrideCard,
  SectionHead,
  ServiceCard,
  TestimonialCarousel,
} from "@/components";
import Image from "next/image";
import { CountryIcon, PrideBg, PrideIcon, SupportIcon } from "@/assets";

export default function Home() {
  const t = useTranslations("Common");
  return (
    <>
      <HeroSlider />
      <div className="feature-sec">
        <div className="app-container">
          <FeatureCaro />
        </div>
      </div>
      <section className="sec-wrap pb-20">
        <div className="app-container">
          <SectionHead title={t("top_packages_iran")} rightTitle={t('see_all_package')} rightTarget="/" />
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
          <div className="heading-sec mb-20">
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
            <div className="col-span-3"></div>
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

      <section className="sec-padd-sm">
        <div className="app-container">
          <SectionHead title={t("happy_clients")} rightTitle={t('more_testimonials')} rightTarget="/" />
          <div className="h-8"></div>
          <TestimonialCarousel />
        </div>
      </section>


      <section className="sec-padd-sm">
        <div className="app-container">
          <SectionHead title={t("latest_blog")} rightTitle={t('all_blogs')} rightTarget="/" />
          <div className="h-8"></div>
        </div>
      </section>
    </>
  );
}
