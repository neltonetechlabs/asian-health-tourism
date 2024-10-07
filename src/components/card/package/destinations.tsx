import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import MotionDiv from "@/components/common/motiondiv";

import { UIComponent } from "@/models";
import { BlueChevron } from "@/assets";

import classes from "./style.module.css";

const DestinationCard: React.FC<UIComponent.ListCardProps> = ({
  image,
  title,
  description,
  slug,
}) => {
  const t = useTranslations("Common");

  return (
    <div className={classNames(classes.packagecard, classes.destinationCard)}>
      <div className={classes.cardBody}>
        <figure className={classes.pckgimg}>
          <Image src={image || ""} width={100} height={100} alt={title} className="img-fit cover obj_center" />
        </figure>
        <div className={classes.pckgContent}>
          <h5>{title}</h5>
          <p>{description}</p>
          <Link
            href={slug}
            title={t("learn_more")}
            className={classes.pckgLink}
          >
            <span>{t("learn_more")}</span>
            <Image alt={t("learn_more")} src={BlueChevron} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
