import {
  BlogCard,
  BlogSearch,
  InnerBanner,
  MotionDiv,
  SectionHead,
} from "@/components";
import useAppLocale from "@/hooks/useAppLocale";
import { UIComponent } from "@/models";
import { API_CLIENT } from "@/services";
import { Metadata, NextPage } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(
): Promise<Metadata> {
  const metadata = await API_CLIENT.fetchMetaData("blog");

  return {
    title: metadata?.meta_title,
    description: metadata?.meta_description,
    keywords: metadata?.meta_keywords,
  };
}

export default async function Page({
  params: { locale },
}: UIComponent.DefaultPageParam) {
  const t = await getTranslations("Common");
  const blogs = await API_CLIENT.fetchBlogs();
  const { translate } = useAppLocale({ locale });
  return (
    <main>
      <InnerBanner page="blog" />
      <section className="sec-padd">
        <div className="app-container">
          <MotionDiv className="grid grid-cols-1">
            <SectionHead
              title={t("search_blog")}
              rightSection={<BlogSearch />}
            />
          </MotionDiv>
          <div className="h-9"></div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {blogs?.map((blog) => (
              <MotionDiv key={blog?.id}>
                <BlogCard
                  key={blog?.id}
                  id={blog?.id}
                  title={translate("title", blog)}
                  description={translate("small_description", blog)}
                  image={blog?.image}
                  date={blog?.blog_date}
                  slug={blog?.slug}
                />
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
