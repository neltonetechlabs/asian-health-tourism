import {
  BlogCard,
  BlogSearch,
  InnerBanner,
  MotionDiv,
  SectionHead,
} from "@/components";
import useAppLocale from "@/hooks/useAppLocale";
import { UIComponent } from "@/models";
import { BlogContent } from "@/models/api.data";
import { API_CLIENT } from "@/services";
import { Metadata, NextPage } from "next";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { NextRouter } from "next/router";
import { FormEvent } from "react";
import Image from "next/image";
import { YellowChevron } from "@/assets";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await API_CLIENT.fetchMetaData("blog");

  return {
    title: metadata?.meta_title,
    description: metadata?.meta_description,
    keywords: metadata?.meta_keywords,
  };
}

interface BlogListParams {
  params: { locale: string };
  searchParams: { page: string };
}

export default async function Page({
  params: { locale },
  searchParams: { page },
}: BlogListParams) {
  const t = await getTranslations("Common");
  const blogs = await API_CLIENT.fetchBlogs({
    offset: 0,
    limit: Boolean(page) ? Number(page) * 2 : 9,
  });
  const { translate } = useAppLocale({ locale });
  const handleSubmit = async (): Promise<null> => {
    "use server";
    redirect(
      `/${locale}/blogs/?page=${Boolean(page) ? Number(page) + 1 : "2"}`
    );
  };
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
                  locale={locale}
                />
              </MotionDiv>
            ))}
          </div>
          <div className="load-more">
            <form action={handleSubmit}>
              <input
                name="offset"
                type="hidden"
                value={blogs[blogs?.length - 1]?.id}
              />
              <button type="submit">
                <span>{t("see_all_blogs")}</span>
                <Image src={YellowChevron} alt={t("see_all_blogs")} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
