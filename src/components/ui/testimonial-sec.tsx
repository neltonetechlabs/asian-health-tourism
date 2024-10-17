import { useTranslations } from "next-intl";
import TestimonialCarousel from "../carousel/testimonials";
import SectionHead from "./section.head";
import { API_CLIENT } from "@/services";
import { getTranslations } from "next-intl/server";
import MotionDiv from "../common/motiondiv";

const TestimonialSection = async () => {
  const t = await getTranslations("Common");
  const testimonials = await API_CLIENT.fetchTestimonials();
  if (testimonials) {
    return (
      <section className="sec-padd pb-0">
        <div className="app-container">
          <MotionDiv>
            <SectionHead
              title={t("happy_clients")}
              rightTitle={t("more_testimonials")}
              rightTarget="/"
            />
          </MotionDiv>
          <div className="md:h-8 h-4"></div>
          <MotionDiv>
            <TestimonialCarousel data={testimonials} />
          </MotionDiv>
        </div>
      </section>
    );
  }
  return <></>;
};

export default TestimonialSection;
