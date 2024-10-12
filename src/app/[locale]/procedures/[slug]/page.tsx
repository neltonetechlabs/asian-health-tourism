import { NextPage } from "next";

import { UIComponent } from "@/models";
import DetailMeta from "@/components/card/detailmeta";
import { API_CLIENT } from "@/services";
import useAppLocale from "@/hooks/useAppLocale";
import {
  DestinationCard,
  ProcedureCard,
  SectionHead,
} from "@/components";
import MoreInfoCard from "@/components/card/moreinfo";
import { getTranslations } from "next-intl/server";

const ProcedureDetail: NextPage<UIComponent.DetailPageParam> = async ({
  params: { slug, locale },
}) => {
  const { destination, other_destinations, procedures } =
    (await API_CLIENT.fetchDestinationDetail(slug)) || {};
  const { translate } = useAppLocale({ locale });
  const t = await getTranslations("Common");
  return (
    <main>
      <DetailMeta
        title={translate("title", destination)}
        description={translate("description", destination)}
        image={destination?.image || ""}
      />
      <MoreInfoCard
        title="Isfahan More Information"
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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-9">
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
    </main>
  );
};

export default ProcedureDetail;
