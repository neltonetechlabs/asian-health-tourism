import { BlogCard, BlogSearch, InnerBanner, SectionHead } from "@/components";
import { NextPage } from "next";
import { useTranslations } from "next-intl";

const Blog: NextPage = () => {
  const t = useTranslations("Common");
  return (
    <main>
      <InnerBanner />
      <section className="sec-padd">
        <div className="app-container">
          <div className="grid grid-cols-1">
            <SectionHead
              title={t("search_blog")}
              rightSection={<BlogSearch />}
            />
          </div>
          <div className="h-10"></div>
          <div className="grid grid-cols-3 gap-7">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <BlogCard
                key={item}
                id={item}
                title={
                  "Contrary to popular belief, Lorem Ipsum is not simply random text."
                }
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
