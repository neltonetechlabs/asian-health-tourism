import { UIComponent } from "@/models";
import classes from "./style.module.css";
import Image from "next/image";
import { Demo1, YellowChevron } from "@/assets";
import { useTranslations } from "next-intl";
import MotionDiv from "@/components/common/motiondiv";
import { cardVariants } from "@/utils/cardanimate";
import moment from "moment";
import Link from "next/link";
import { getLocale } from "next-intl/server";

const BlogCard: React.FC<UIComponent.BlogCardProps> = async ({
  id,
  image,
  title,
  description,
  slug,
  date,
  delay,
}) => {
  const t = useTranslations("Common");
  const locale = await getLocale();
  const animateScript = {
    ...cardVariants,
    onscreen: {
      ...cardVariants?.onscreen,
      transition: {
        ...cardVariants?.transition,
        delay,
      },
    },
  };
  return (
    <div className={classes.blogCard}>
      <Link href={`/${locale}/blogs/${slug}`} replace>
        <figure className={classes.blogImage}>
          <Image
            alt={title}
            src={image || Demo1}
            height={260}
            width={460}
            priority={false}
            quality={50}
          />
        </figure>
        <div className={classes.tag}>{t("blog_tag")}</div>
        <figcaption className={classes.blogDesc}>
          <h4>{title}</h4>
        </figcaption>
        <div className={classes.blogFooter}>
          <div className={classes.blogDt}>
            {moment(date).format("DD MMMM yy")}
          </div>
          <Image src={YellowChevron} alt={title} />
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
