import { BlogCard, BlogSearch, InnerBanner, SectionHead } from "@/components";
import useAppLocale from "@/hooks/useAppLocale";
import { UIComponent } from "@/models";
import { API_CLIENT } from "@/services";
import { NextPage } from "next";
import { getTranslations } from "next-intl/server";

const Blog: NextPage<UIComponent.DefaultPageParam> = async ({
  params: { locale },
}) => {
  const t = await getTranslations("Common");
  const blogs = await API_CLIENT.fetchBlogs();
  const { translate } = useAppLocale({ locale });
  return (
    <main>
      <InnerBanner title="Blogs" subTitle="Bluffering" />
      <section className="sec-padd">
        <div className="app-container">
          <div className="grid grid-cols-1">
            <SectionHead
              title={t("search_blog")}
              rightSection={<BlogSearch />}
            />
          </div>
          <div className="h-10"></div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {blogs?.map((blog) => (
              <BlogCard
                key={blog?.id}
                id={blog?.id}
                title={translate("title", blog)}
                description={translate("small_description", blog)}
                image={blog?.image}
                date={blog?.blog_date}
                slug={blog?.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
