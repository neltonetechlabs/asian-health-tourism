import { getLocale, getTranslations } from "next-intl/server";

import SectionHead from "./section.head";
import BlogCard from "../card/blog";
import { API_CLIENT } from "@/services";
import useAppLocale from "@/hooks/useAppLocale";

const LatestBlog: React.FC<{}> = async () => {
  const t = await getTranslations("Common");
  const locale = await getLocale();
  const blogs = await API_CLIENT.fetchBlogs();
  const { translate } = useAppLocale({ locale });
  return (
    <section className="sec-padd-sm">
      <div className="app-container">
        <SectionHead
          title={t("latest_blog")}
          rightTitle={t("all_blogs")}
          rightTarget="/blogs"
        />
        <div className="h-8"></div>
        <div className="grid grid-cols-3 gap-5">
          {blogs?.map((blog, index) => (
            <BlogCard
              title={translate("title", blog)}
              id={blog?.id}
              date={blog?.blog_date}
              delay={0.001 + index}
              image={blog?.image}
              key={blog?.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
