import { Metadata, NextPage } from "next";

import { UIComponent } from "@/models";
import DetailMeta from "@/components/card/detailmeta";
import { API_CLIENT } from "@/services";
import useAppLocale from "@/hooks/useAppLocale";
import { DestinationCard, ProcedureCard, SectionHead, TestimonialSection } from "@/components";
import MoreInfoCard from "@/components/card/moreinfo";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";



type Props = {
  params: { procedure: string };
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { procedure } = params;
  const procedureData = await API_CLIENT.fetchProcedureDetail(procedure);

  return {
    title: procedureData?.title_en,
    description: procedureData?.small_description_en,
  };
}


const ProcedureDetail: NextPage<UIComponent.DetailPageParam> = async ({
  params: { procedure, locale },
}) => {
  unstable_setRequestLocale(locale);
  const procedureData = await API_CLIENT.fetchProcedureDetail(procedure);
  const { translate } = useAppLocale({ locale });
  const t = await getTranslations("Common");

  if (!procedureData) return notFound();

  return (
    <main>
      <DetailMeta
        title={translate("title", procedureData)}
        description={translate("description", procedureData)}
        image={procedureData?.image || ""}
      />
      <MoreInfoCard
        title={t("moreinfo", { procedure: translate("title", procedureData)})}
        content={translate("more_info", procedureData) || ""}
      />      
      <TestimonialSection />
      <div className="md:h-0 h-5"></div>
    </main>
  );
};

export default ProcedureDetail;
