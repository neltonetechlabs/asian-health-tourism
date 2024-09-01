import Image from "next/image";
import classes from "./style.module.css";
import { Service } from "@/assets";
const ServiceCard: React.FC<{}> = () => {
  return (
    <div className={classes.servicecard} tabIndex={0}>
      <div className={classes.hoverImage}>
        <Image alt="Service" src={Service} />
      </div>
      <div className={classes.content}>
        <div className={classes.count}>01</div>
        <h6 className={classes.head}>Online Consultation</h6>
        <p className={classes.servicecontent}>
          Assessment of patients with undefined symptoms and complaints - to
          help in diagnosis and treatment recommendations
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
