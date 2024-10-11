import { useTranslations } from "next-intl";

import useAppLocale from "@/hooks/useAppLocale";
import { BlogContent } from "@/models/api.data";

import SectionHead from "./section.head";
import BlogCard from "../card/blog";
import MotionDiv from "../common/motiondiv";
import { cardVariants } from "@/utils/cardanimate";

interface LatestBlogProps {
  locale: string;
  latestBlogs: BlogContent[];
}

const LatestBlog: React.FC<LatestBlogProps> = ({
  latestBlogs = [],
  locale = "en",
}) => {
  const blogs = latestBlogs;
  const t = useTranslations("Common");
  const { translate } = useAppLocale({ locale });
  return (
    <MotionDiv animateScript={cardVariants} className="sec-padd-sm">
      <div className="app-container">
        <SectionHead
          title={t("latest_blog")}
          rightTitle={t("all_blogs")}
          rightTarget="blogs"
        />
        <div className="h-8"></div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {blogs?.map((blog, index) => (
            <BlogCard
              title={translate("title", blog)}
              id={blog?.id}
              date={blog?.blog_date}
              image={blog?.image}
              key={blog?.id}
              slug={blog?.slug}
            />
          ))}
        </div>
      </div>
    </MotionDiv>
  );
};

export default LatestBlog;
