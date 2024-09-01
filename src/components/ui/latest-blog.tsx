import { useTranslations } from "next-intl";
import SectionHead from "./section.head";
import BlogCard from "../card/blog";

const LatestBlog: React.FC<{}> = () => {
  const t = useTranslations("Common");
  return (
    <section className="sec-padd-sm">
      <div className="app-container">
        <SectionHead
          title={t("latest_blog")}
          rightTitle={t("all_blogs")}
          rightTarget="/"
        />
        <div className="h-8"></div>
        <div className="grid grid-cols-3 gap-5">
          <BlogCard
            title="Contrary to popular belief, Lorem Ipsum is not simply random text."
            id={0}
          />
          <BlogCard
            title="Contrary to popular belief, Lorem Ipsum is not simply random text."
            id={0}
          />
          <BlogCard
            title="Contrary to popular belief, Lorem Ipsum is not simply random text."
            id={0}
          />
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
