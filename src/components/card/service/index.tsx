import Image from "next/image";

import { Service } from "@/assets";

import classes from "./style.module.css";
import { ServiceHomePage } from "@/models/api.data";
import useAppLocale from "@/hooks/useAppLocale";
import { listNumber } from "@/utils/utility";
import { cardVariants } from "@/utils/cardanimate";
import MotionDiv from "@/components/common/motiondiv";

interface ServiceCardProps {
  serviceItem: ServiceHomePage;
  locale: string;
  count: number;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceItem,
  locale,
  count = 0,
  delay
}) => {
 
  const fadeInVariants = {
    offscreen: { opacity: 0, y: 0 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const { translate } = useAppLocale({ locale });
  return (
    <MotionDiv animateScript={fadeInVariants} className={classes.servicecard}>
      <div className={classes.hoverImage}>
        <Image alt="Service" src={serviceItem?.image} width={200} height={200} />
      </div>
      <div className={classes.content}>
        <div className={classes.count}>{listNumber(count)}</div>
        <h6 className={classes.head}>{translate("title", serviceItem)}</h6>
        <p className={classes.servicecontent}>
          {translate("description", serviceItem)}
        </p>
      </div>
    </MotionDiv>
  );
};

export default ServiceCard;
