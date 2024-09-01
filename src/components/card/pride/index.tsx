import { UIComponent } from "@/models";
import classes from "./style.module.css";
import Image from "next/image";
import { PrideIcon } from "@/assets";
const PrideCard: React.FC<UIComponent.PrideCardProps> = ({
    icon = PrideIcon,
    title,
    count
}) => {
  return (
    <div className={classes.prideCountCard}>
      <div className={classes.iconHolder}>
        <Image alt={title} src={icon} width={60} />
      </div>
      <div className={classes.countElm}>{count}</div>
      <div className={classes.titleElm}>{title}</div>
    </div>
  );
};

export default PrideCard;
