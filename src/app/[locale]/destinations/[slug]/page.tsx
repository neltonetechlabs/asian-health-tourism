import { NextPage } from "next";
import Image from "next/image";
import { Demo1 } from "@/assets";

import { UIComponent } from "@/models";
import DetailMeta from "@/components/card/detailmeta";
import { API_CLIENT } from "@/services";
import useAppLocale from "@/hooks/useAppLocale";
import { DestinationCard, PackageCard, SectionHead } from "@/components";
import MoreInfoCard from "@/components/card/moreinfo";

const DestinationDetail: NextPage<UIComponent.DetailPageParam> = async ({
  params: { slug, locale },
}) => {
  const { destination, other_destinations } =
    (await API_CLIENT.fetchDestinationDetail(slug)) || {};
  const { translate } = useAppLocale({ locale });
  return (
    <main>
      <DetailMeta
        title={translate("title", destination)}
        description={translate("description", destination)}
        image={destination?.image || ""}
      />
      <MoreInfoCard title="Isfahan More Information" content={translate("more_info", destination) || ""} />
      <div className="sec-pdd">
        <div className="app-container">
          <SectionHead
            title="Procedures in Isfahan"
            rightTitle="See All Packages"
            rightTarget="/"
          />
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-8 mt-12">
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
          </div>
        </div>
      </div>
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

export default DestinationDetail;
