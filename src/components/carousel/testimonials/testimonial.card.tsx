import Image from "next/image";
import classNames from "classnames";
import { IBM_Plex_Serif } from "next/font/google";

const ibm = IBM_Plex_Serif({ weight: ["300", "400"], subsets: ["latin"] });

import classes from "./style.module.css";
import { TestimonialIcon } from "@/assets";
import { Testimonial } from "@/models/api.data";
import useAppLocale from "@/hooks/useAppLocale";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { isArabic, translate } = useAppLocale({});

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
          {/* <Image src="https://i.pravatar.cc/300" alt="" width={80} height={80} /> */}
          <img src="https://i.pravatar.cc/300" alt="" width={60} height={60} />
        </figure>
        <figure className={classes.persona}>
          <h6>{translate("name", testimonial)}</h6>
          <div className={classes.starRating}>***</div>
        </figure>
      </div>
    </div>
  );
};

export default TestimonialCard;
