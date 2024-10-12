import { Demo1 } from "@/assets";
import { LatestBlog, MotionDiv } from "@/components";
import useAppLocale from "@/hooks/useAppLocale";
import { UIComponent } from "@/models";
import { API_CLIENT } from "@/services";
import { cardVariants } from "@/utils/cardanimate";
import moment from "moment";
import { Metadata, NextPage, ResolvingMetadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

interface BlogDetailPage {
  params: { locale: string; slug: string };
}


type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = params;

  const { blog } = await API_CLIENT.fetchBlogDetail(slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog?.title_en,
    description: blog?.small_description_en,
    openGraph: {
      images: [blog?.image!, ...previousImages],
    },
  };
}

const BlogDetail: NextPage<BlogDetailPage> = async ({
  params: { locale, slug },
}) => {
  const t = await getTranslations("Common");
  const { translate } = useAppLocale({ locale });
  const { blog, latest_blogs } = await API_CLIENT.fetchBlogDetail(slug || "");
  return (
    <main className="sec-padd">
      <div className="app-container">
        <div className="grid grid-cols-6 justify-center items-center">
          <div className="xl:col-start-2 xl:col-span-4 col-span-6">
            <MotionDiv animateScript={cardVariants}>
              <div className="blog-meta">
                <div className="blog-date">
                  {moment(blog?.blog_date).format("dddd, LL")}
                </div>
                <span>/</span>
                <div className="blog-tag">{t("#blog_tag")}</div>
              </div>
            </MotionDiv>
            <MotionDiv animateScript={cardVariants} className="blog-title">
              <h4>{translate("title", blog)}</h4>
            </MotionDiv>
            <MotionDiv animateScript={cardVariants}>
              <figure className="blog-image">
                <Image
                  src={blog?.image || Demo1}
                  alt={blog?.title_en || "Asian Health Tourism"}
                  className="img-fit cover object-center"
                />
              </figure>
            </MotionDiv>

            <div className="blog-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: translate("blog_content", blog) || "",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <LatestBlog latestBlogs={latest_blogs} locale={locale} />
      </div>
    </main>
  );
};

export default BlogDetail;