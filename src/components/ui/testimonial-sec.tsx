import { useTranslations } from "next-intl";
import TestimonialCarousel from "../carousel/testimonials";
import SectionHead from "./section.head";

const TestimonialSection = () => {
  const t = useTranslations("Common");
  return (
    <section className="sec-padd-sm">
      <div className="app-container">
        <SectionHead
          title={t("happy_clients")}
          rightTitle={t("more_testimonials")}
          rightTarget="/"
        />
        <div className="h-8"></div>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default TestimonialSection;
