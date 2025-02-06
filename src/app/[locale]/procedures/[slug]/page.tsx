import { Demo, Demo1, Demo2, Demo3 } from "@/assets";
import {
  InnerBanner,
  LatestBlog,
  PackageSearch,
  ProcedureCard,
  SectionHead,
} from "@/components";
import useAppLocale from "@/hooks/useAppLocale";
import { UIComponent } from "@/models";
import { ListCardProps } from "@/models/component";
import { API_CLIENT } from "@/services";
import { Metadata, NextPage } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";



type Props = {
  params: { slug: string, locale: string };
};


export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  console.log('params?.slug: ', params?.slug);
  const metadata = await API_CLIENT.fetchProcedureCategorDetail(params?.slug);

  return {
    title: metadata?.label_en,
    description: metadata?.description_en,
    // keywords: metadata?.meta_keywords,
  };
}


const CategoryProcedures: NextPage<Props> = async ({
  params: { slug, locale },
}) => {
  unstable_setRequestLocale(locale);
  await generateMetadata(slug);
  const t = await getTranslations("Common");
  const bloglists = await API_CLIENT.fetchBlogs();
  const categoryData = await API_CLIENT.fetchProcedureCategorDetail(slug);
  const procedures = await API_CLIENT.fetchProcedures({offset: 0, limit: 100, category: slug });
  const { translate } = useAppLocale({ locale });

  if (!procedures?.length) return notFound();
  return (
    <main>
      <InnerBanner page="procedures" image={categoryData?.banner_image} title={translate('label', categoryData)} subTitle={translate('description', categoryData)} />
      <section className="sec-padd">
        <div className="app-container">
          <div className="grid grid-cols-1">
            <SectionHead
              title={translate("label", categoryData)}
            />
          </div>
          <div className="md:h-10 h-4"></div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 md:gap-7 gap-2">
            {procedures?.map((item, index) => (
              <ProcedureCard
                key={item?.id}
                title={translate("title", item)}
                image={item?.image}
                description={translate("small_description", item)}
                slug={`${slug}/${item?.slug}`}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>
      <LatestBlog latestBlogs={bloglists} locale={locale} />
    </main>
  );
};

export default CategoryProcedures;
