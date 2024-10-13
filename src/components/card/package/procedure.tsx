import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { BlueChevron, Demo1 } from "@/assets";

import classes from "./style.module.css";
import { UIComponent } from "@/models";
import ImageWithFallBack from "@/components/ui/imagewithfallback";

const ProcedureCard: React.FC<UIComponent.ListCardProps> = ({
  title,
  description,
  slug,
  image,
  locale,
}) => {
  const t = useTranslations("Common");
  return (
    <div className={classes.packagecard}>
      <Link className={classes.pckglink} href={`/${locale}/procedures/${slug}`} title={t("learn_more")}>
        <div className={classes.cardBody}>
          <figure className={classes.pckgimg}>
            <ImageWithFallBack
              src={image || ""}
              alt={title}
              className="img-fit cover obj_center"
              width={600}
              height={300}
            />
          </figure>
          <div className={classes.pckgContent}>
            <h5>{title}</h5>
            <p>{description}</p>
            <div className={classes.pckglinkText}>
              <span>{t("learn_more")}</span>
              <Image alt={t("learn_more")} src={BlueChevron} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProcedureCard;
