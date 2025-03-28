import {
  BlogCard,
  BlogSearch,
  InnerBanner,
  MotionDiv,
  SectionHead,
} from "@/components";
import useAppLocale from "@/hooks/useAppLocale";
import { API_CLIENT } from "@/services";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import { YellowChevron } from "@/assets";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await API_CLIENT.fetchMetaData("blog");

  return {
    title: metadata?.meta_title || "Blog",
    description: metadata?.meta_description || "Explore our blogs",
    keywords: metadata?.meta_keywords || "",
  };
}

interface BlogListParams {
  params: { locale: string };
  searchParams: { page?: string };
}

export default async function Page({
  params: { locale },
  searchParams: { page },
}: BlogListParams) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Common");
  const { translate } = useAppLocale({ locale });
  const limit = Boolean(page) ? Number(page) * 2 : 9;
  const settings = await API_CLIENT.fetchVisibilityConifg();

  const blogs = await API_CLIENT.fetchBlogs({
    offset: 0,
    limit,
  });

  console.log("settings: ", settings);
  if (!blogs?.length) return notFound();

  if (settings?.blogs) {
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
              {blogs.map((blog) => (
                <MotionDiv key={blog.id}>
                  <BlogCard
                    id={blog.id}
                    title={translate("title", blog)}
                    description={translate("small_description", blog)}
                    image={blog.image}
                    date={blog.blog_date}
                    slug={blog.slug}
                    locale={locale}
                  />
                </MotionDiv>
              ))}
            </div>
            <div className="load-more">
              <form method="GET" action={`/${locale}/blogs`}>
                <input
                  name="page"
                  type="hidden"
                  value={Boolean(page) ? Number(page) + 1 : 2}
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
  return (
    <div className="disable-page">
      <h4>Something Exciting is Coming Soon!
      </h4>
      <article>
      We are working hard on something special just for you! Our team is busy crafting a new page that will bring you even more value, insights, and experiences. Stay tuned for updates, as we’ll be unveiling new content and features shortly.
      </article>
    </div>
  );
}
