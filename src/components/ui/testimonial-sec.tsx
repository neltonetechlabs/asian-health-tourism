import { useTranslations } from "next-intl";
import TestimonialCarousel from "../carousel/testimonials";
import SectionHead from "./section.head";
import { API_CLIENT } from "@/services";
import { getTranslations } from "next-intl/server";

const TestimonialSection = async () => {
  const t = await getTranslations("Common");
  const testimonials = await API_CLIENT.fetchTestimonials();
  return (
    <section className="sec-padd-sm">
      <div className="app-container">
        <SectionHead
          title={t("happy_clients")}
          rightTitle={t("more_testimonials")}
          rightTarget="/"
        />
        <div className="h-8"></div>
        <TestimonialCarousel data={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialSection;
