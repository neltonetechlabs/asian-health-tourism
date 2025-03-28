import { UIComponent } from "@/models";
import classes from "./style.module.css";
import Image from "next/image";
import { PrideIcon } from "@/assets";
import MotionDiv from "@/components/common/motiondiv";
import { cardVariants } from "@/utils/cardanimate";
import Counter from "@/components/ui/counter";
const PrideCard: React.FC<UIComponent.PrideCardProps> = ({
    icon = PrideIcon,
    title,
    count,
    delay
}) => {

  return (
    <MotionDiv animateScript={cardVariants} className={classes.prideCountCard}>
      <div className={classes.iconHolder}>
        <Image alt={title} src={icon} width={60} />
      </div>
      <div className={classes.countElm}>{count}</div>
      <div className={classes.titleElm}>{title}</div>
    </MotionDiv>
  );
};

export default PrideCard;
