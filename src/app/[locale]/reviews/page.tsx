import { InnerBanner, MotionDiv } from "@/components";
import TestimonialCard from "@/components/carousel/testimonials/testimonial.card";
import { UIComponent } from "@/models";
import { API_CLIENT } from "@/services";
import { NextPage } from "next";

const PatientReviews: NextPage<UIComponent.DefaultPageParam> = async ({
  params: { locale },
}) => {
  const testimonials = await API_CLIENT.fetchTestimonials();
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
};

export default PatientReviews;
