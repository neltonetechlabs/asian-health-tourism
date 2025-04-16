import { InnerBanner, MotionDiv } from "@/components";
import TestimonialCard from "@/components/carousel/testimonials/testimonial.card";
import { UIComponent } from "@/models";
import { API_CLIENT } from "@/services";
import { NextPage } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

const PatientReviews: NextPage<UIComponent.DefaultPageParam> = async ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const testimonials = await API_CLIENT.fetchTestimonials();
  const settings = await API_CLIENT.fetchVisibilityConifg();

  if (!testimonials?.length) return notFound();
  if (settings?.reviews) {
    return (
      <main>
        <InnerBanner page="reviews" />
        <div className="sec-padd">
          <div className="app-container">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {testimonials?.map((review) => (
                <MotionDiv key={review?.id}>
                  <TestimonialCard testimonial={review} />
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <div className="disable-page">
        <h4>Something Exciting is Coming Soon!</h4>
        <article>
          We are working hard on something special just for you! Our team is
          busy crafting a new page that will bring you even more value,
          insights, and experiences. Stay tuned for updates, as we’ll be
          unveiling new content and features shortly.
        </article>
      </div>
    );
  }
};

export default PatientReviews;
