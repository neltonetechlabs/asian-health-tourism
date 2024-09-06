import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { BlueChevron, Demo1 } from "@/assets";

import classes from "./style.module.css";
import { UIComponent } from "@/models";

const ProcedureCard: React.FC<UIComponent.ListCardProps> = ({
  title,
  description,
  slug,
  image,
}) => {
  const t = useTranslations("Common");
  return (
    <div className={classes.packagecard}>
      <div className={classes.cardBody}>
        <figure className={classes.pckgimg}>
          <Image src={image} alt={title} className="img-fit cover obj_center" />
        </figure>
        <div className={classes.pckgContent}>
          <h5>{title}</h5>
          <p>{description}</p>
          <Link href={slug} title={t("learn_more")} className={classes.pckgLink}>
            <span>{t("learn_more")}</span>
            <Image alt={t("learn_more")} src={BlueChevron} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProcedureCard;
