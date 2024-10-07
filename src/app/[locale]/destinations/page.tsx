import { Demo, Demo1, Demo2, Demo3 } from "@/assets";
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
import { ListCardProps } from "@/models/component";
import { API_CLIENT } from "@/services";
import { NextPage } from "next";
import { getTranslations } from "next-intl/server";

const demoProcedures: ListCardProps[] = [
  {
    title: "Rhinoplasty (Nose Job)",
    description:
      "Traveling abroad for nose surgery is not hassle-free if you want to do it on your own; that’s...",
    slug: "/",
    image: Demo1,
  },
  {
    title: "Weight Loss",
    description:
      "Traveling abroad for nose surgery is not hassle-free if you want to do it on your own; that’s...",
    slug: "/",
    image: Demo2,
  },
  {
    title: "Plastic Surgery",
    description:
      "Traveling abroad for nose surgery is not hassle-free if you want to do it on your own; that’s...",
    slug: "/",
    image: Demo3,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Traveling abroad for nose surgery is not hassle-free if you want to do it on your own; that’s...",
    slug: "/",
    image: Demo,
  },
];

const DestinationList: NextPage<UIComponent.DefaultPageParam> = async ({
  params: { locale }
}) => {
  const t = await getTranslations("Common");
  const destinations = await API_CLIENT.fetchDestinations();
  const { translate } = useAppLocale({ locale })
  return (
    <main>
      <InnerBanner
        title="Destinations"
        subTitle="Asian Health Tourism is the biggest medical tourism and healthcare service provider in Iran"
      />
      <section className="sec-padd">
        <div className="app-container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {destinations?.map((destinaion) => (
              <DestinationCard
                key={destinaion?.id}
                title={translate("title", destinaion)}
                image={destinaion?.image}
                description={translate("small_description", destinaion)}
                slug={destinaion?.slug || ""}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationList;
