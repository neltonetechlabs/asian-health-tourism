import Image from "next/image";
import classNames from "classnames";
import { IBM_Plex_Serif } from 'next/font/google';

const ibm = IBM_Plex_Serif({weight: ['300', '400'], subsets: ["latin"]});

import classes from "./style.module.css";
import { TestimonialIcon } from "@/assets";
const TestimonialCard = () => {
  return (
    <div className={classNames(classes.testiCard, ibm.className)}>
      <div className={classes.quoteIcon}>
        <Image src={TestimonialIcon} alt="" priority />
      </div>
      <div className={classes.testimonial}>
        <p>
          The doctor I booked on Sesame was so great! She asked lots of
          questions and listened carefully to me.
        </p>
      </div>
      <div className={classes.profileSec}>
        <figure className={classes.profileImage}>
            {/* <Image src="https://i.pravatar.cc/300" alt="" width={80} height={80} /> */}
            <img src="https://i.pravatar.cc/300" alt="" width={60} height={60} />
        </figure>
        <figure className={classes.persona}>
          <h6>Profile Name</h6>
          <div className={classes.starRating}>***</div>
        </figure>
      </div>
    </div>
  );
};

export default TestimonialCard;
