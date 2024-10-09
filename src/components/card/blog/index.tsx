import { UIComponent } from "@/models";
import classes from "./style.module.css";
import Image from "next/image";
import { Demo1 } from "@/assets";
import { useTranslations } from "next-intl";
import MotionDiv from "@/components/common/motiondiv";
import { cardVariants } from "@/utils/cardanimate";

const BlogCard: React.FC<UIComponent.BlogCardProps> = ({
  id,
  image,
  title,
  description,
  slug,
  date,
  delay
}) => {
  const t = useTranslations("Common");


  console.log("dat", date);


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
    <MotionDiv className={classes.blogCard} animateScript={animateScript}>
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
      <div className={classes.blogDt}>{date}</div>
    </MotionDiv>
  );
};

export default BlogCard;
