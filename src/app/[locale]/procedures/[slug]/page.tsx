import { Metadata, NextPage } from "next";

import { UIComponent } from "@/models";
import DetailMeta from "@/components/card/detailmeta";
import { API_CLIENT } from "@/services";
import useAppLocale from "@/hooks/useAppLocale";
import { DestinationCard, ProcedureCard, SectionHead, TestimonialSection } from "@/components";
import MoreInfoCard from "@/components/card/moreinfo";
import { getTranslations } from "next-intl/server";



type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { slug } = params;
  const procedure = await API_CLIENT.fetchProcedureDetail(slug);

  return {
    title: procedure?.title_en,
    description: procedure?.small_description_en,
  };
}


const ProcedureDetail: NextPage<UIComponent.DetailPageParam> = async ({
  params: { slug, locale },
}) => {
  const procedure = await API_CLIENT.fetchProcedureDetail(slug);
  const { translate } = useAppLocale({ locale });
  const t = await getTranslations("Common");
  return (
    <main>
      <DetailMeta
        title={translate("title", procedure)}
        description={translate("description", procedure)}
        image={procedure?.image || ""}
      />
      <MoreInfoCard
        title="Isfahan More Information"
        content={translate("more_info", procedure) || ""}
      />      
      <TestimonialSection />
      <div className="md:h-0 h-5"></div>
    </main>
  );
};

export default ProcedureDetail;
