import {
    DestinationCard,
  InnerBanner,
  LatestBlog,
  PackageSearch,
  ProcedureCard,
  SectionHead,
} from "@/components";
import useAppLocale from "@/hooks/useAppLocale";
import { UIComponent } from "@/models";
import { API_CLIENT } from "@/services";
import { Metadata, NextPage } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata(
): Promise<Metadata> {
  const metadata = await API_CLIENT.fetchMetaData("destinations");

  return {
    title: metadata?.meta_title,
    description: metadata?.meta_description,
    keywords: metadata?.meta_keywords,
  };
}

const DestinationList: NextPage<UIComponent.DefaultPageParam> = async ({
  params: { locale }
}) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Common");
  const destinations = await API_CLIENT.fetchDestinations({ offset: 0, limit: 9 });
  const { translate } = useAppLocale({ locale });

  if (!destinations?.length) return notFound();

  return (
    <main>
      <InnerBanner
        page="destinations"
      />
      <section className="sec-padd">
        <div className="app-container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 md:gap-7 gap-4">
            {destinations?.map((destinaion) => (
              <DestinationCard
                key={destinaion?.id}
                title={translate("title", destinaion)}
                image={destinaion?.image}
                description={translate("small_description", destinaion)}
                slug={destinaion?.slug || ""}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationList;
