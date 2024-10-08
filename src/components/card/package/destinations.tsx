import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import classNames from "classnames";

import { UIComponent } from "@/models";
import { BlueChevron } from "@/assets";

import classes from "./style.module.css";
import MotionDiv from "@/components/common/motiondiv";
import { cardVariants } from "@/utils/cardanimate";

const DestinationCard: React.FC<UIComponent.ListCardProps> = ({
  image,
  title,
  description,
  slug,
  locale
}) => {
  const t = useTranslations("Common");

  return (
    <MotionDiv
      className={classNames(classes.packagecard, classes.destinationCard)}
      animateScript={cardVariants}
    >
      <div className={classes.cardBody}>
        <figure className={classes.pckgimg}>
          <Image
            src={image || ""}
            width={100}
            height={100}
            alt={title}
            className="img-fit cover obj_center"
          />
        </figure>
        <div className={classes.pckgContent}>
          <h5>{title}</h5>
          <p>{description}</p>
          <Link
            href={`/${locale}/destinations/${slug}`}
            title={t("learn_more")}
            className={classes.pckgLink}
          >
            <span>{t("learn_more")}</span>
            <Image alt={t("learn_more")} src={BlueChevron} />
          </Link>
        </div>
      </div>
    </MotionDiv>
  );
};

export default DestinationCard;
