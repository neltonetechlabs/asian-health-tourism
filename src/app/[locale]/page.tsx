import { useTranslations } from "next-intl";

import {
  FeatureCaro,
  HeroSlider,
  PackageCard,
  SectionHead,
  ServiceCard,
  StatCard,
} from "@/components";

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
          <SectionHead title={t("top_packages_iran")} />
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
            <div className="grid grid-cols-2 gap-8">
              <div className="left-sec-content">
                <h2>
                  25 Years of doing <br />
                  the impossible
                </h2>
                <div className="count-sec">
                  <StatCard count="14+" title="Years of Experiences" />
                  <StatCard count="648" title="Happy Clients" />
                  <StatCard count="24/7" title="Service" />
                </div>
              </div>
              <div className="why-content">
                <h4>Why Asian Health Tourism Iran?</h4>
                <article>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing It was popularised
                  in the 1960s with the release of Letraset sheets containing
                  containing It was popularised in the 1960s with
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-padd">
        <div className="app-container">
          <div className="heading-sec mb-20">
            <h3>{t("product_name")}</h3>
            <h6>{t("product_tag")}</h6>
          </div>
          <div className="grid grid-cols-5 gap-8">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </section>
    </>
  );
}
