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


export async function generateMetadata(
): Promise<Metadata> {
  const metadata = await API_CLIENT.fetchMetaData("procedures");

  return {
    title: metadata?.meta_title,
    description: metadata?.meta_description,
    keywords: metadata?.meta_keywords,
  };
}

const Procedures: NextPage<UIComponent.DetailPageParam> = async ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Common");
  const bloglists = await API_CLIENT.fetchBlogs();
  const proceduresCat = await API_CLIENT.fetchProcedureCategories();
  const { translate } = useAppLocale({ locale });

  if (!proceduresCat?.length) return notFound();

  return (
    <main>
      <InnerBanner page="procedures" />
      <section className="sec-padd">
        <div className="app-container">
          <div className="grid grid-cols-1">
            <SectionHead
              title={t("top_procedures_iran")}
            />
          </div>
          <div className="md:h-10 h-4"></div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 md:gap-7 gap-2">
            {proceduresCat?.map((item, index) => (
              <ProcedureCard
                key={item?.id}
                title={translate("label", item)}
                image={item?.image}
                description={translate("description", item)}
                slug={item?.slug}
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

export default Procedures;
