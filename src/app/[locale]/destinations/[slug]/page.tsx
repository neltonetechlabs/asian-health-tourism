import { Metadata, NextPage } from "next";
import Image from "next/image";
import { Demo1 } from "@/assets";

import { UIComponent } from "@/models";
import DetailMeta from "@/components/card/detailmeta";
import { API_CLIENT } from "@/services";
import useAppLocale from "@/hooks/useAppLocale";
import {
  DestinationCard,
  PackageCard,
  ProcedureCard,
  SectionHead,
} from "@/components";
import MoreInfoCard from "@/components/card/moreinfo";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  if (slug) {
    const { destination } =
      (await API_CLIENT.fetchDestinationDetail(slug)) || {};

    return {
      title: destination?.title_en + ' | Asian Health Tourism',
      description: destination?.small_description_en,
    };
  } else {
    const metadata = await API_CLIENT.fetchMetaData("destinations");

    return {
      title: metadata?.meta_title,
      description: metadata?.meta_description,
      keywords: metadata?.meta_keywords,
    };
  }
}

const DestinationDetail: NextPage<UIComponent.DestinationDetailPageParam> = async ({
  params: { slug, locale },
}) => {
  unstable_setRequestLocale(locale);
  const { destination, other_destinations, procedures } =
    (await API_CLIENT.fetchDestinationDetail(slug)) || {};
  const { translate } = useAppLocale({ locale });
  const t = await getTranslations("Common");

  if (!destination) return notFound();

  return (
    <main>
      <DetailMeta
        title={translate("title", destination)}
        description={translate("description", destination)}
        image={destination?.image || ""}
      />
      <MoreInfoCard
        title={t("moreinfo", { procedure: translate("title", destination)})}
        content={translate("more_info", destination) || ""}
      />
      {procedures?.length ?? 0 > 0 ? (
        <div className="sec-pdd">
          <div className="app-container">
            <SectionHead
              title={t("procedure", { addOn: translate("title", destination) })}
              rightTitle="See All Packages"
              rightTarget="procedures"
            />
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-8 mt-12">
              {procedures?.map((procedure) => (
                <ProcedureCard
                  key={procedure?.id}
                  title={translate("title", procedure)}
                  image={procedure?.image}
                  description={translate("small_description", procedure)}
                  slug={procedure?.slug}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="sec-padd">
        <div className="app-container">
          <SectionHead
            title="More Destinations"
            rightTitle="See All Destinations"
            rightTarget="/"
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 md:gap-7 gap-4 md:mt-9 mt-0">
            {other_destinations?.map((destinaion) => (
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
      </div>
      <div className="md:h-0 h-5"></div>

    </main>
  );
};

export default DestinationDetail;
