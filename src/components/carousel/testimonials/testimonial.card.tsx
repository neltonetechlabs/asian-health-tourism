import Image from "next/image";
import classNames from "classnames";
import { IBM_Plex_Serif } from "next/font/google";

const ibm = IBM_Plex_Serif({ weight: ["300", "400"], subsets: ["latin"] });

import classes from "./style.module.css";
import { TestimonialIcon } from "@/assets";
import { Testimonial } from "@/models/api.data";
import useAppLocale from "@/hooks/useAppLocale";
import StarRating from "./starrating";
import { useLocale } from "next-intl";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const locale = useLocale();
  const { isArabic, translate } = useAppLocale({locale});

  return (
    <div
      className={classNames(classes.testiCard, ibm.className, {
        [classes.rtlCard]: isArabic,
      })}
    >
      <div className={classes.quoteIcon}>
        <Image src={TestimonialIcon} alt="" priority />
      </div>
      <div className={classes.testimonial}>
        <p>{translate("content", testimonial)}</p>
      </div>
      <div className={classes.profileSec}>
        <figure className={classes.profileImage}>
          <Image
            src={testimonial?.image || ""}
            alt="Asian Health Tourism"
            width={80}
            height={80}
          />
        </figure>
        <figure className={classes.persona}>
          <h6>{translate("name", testimonial)}</h6>
          <div className={classes.starRating}>
            <StarRating rating={testimonial?.star_rating || 1} />
          </div>
        </figure>
      </div>
    </div>
  );
};

export default TestimonialCard;
