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
    <div className="sec-padd">
      <div className="app-container">
        <MotionDiv>
          <SectionHead
            title={t("latest_blog")}
            rightTitle={t("all_blogs")}
            rightTarget="blogs"
          />
        </MotionDiv>
        <div className="md:h-8 h-4"></div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {blogs?.map((blog, index) => (
            <MotionDiv animateScript={cardVariants} key={blog?.id}>
              <BlogCard
                title={translate("title", blog)}
                id={blog?.id}
                date={blog?.blog_date}
                image={blog?.image}
                key={blog?.id}
                slug={blog?.slug}
                locale={locale}
              />
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
