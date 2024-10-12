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
import { NextPage } from "next";
import { useTranslations } from "next-intl";
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

const Procedures: NextPage<UIComponent.DetailPageParam> = async ({
  params: { locale },
}) => {
  const t = await getTranslations("Common");
  const bloglists = await API_CLIENT.fetchBlogs();
  const procedures = await API_CLIENT.fetchProcedures();
  const { translate } = useAppLocale({ locale });
  return (
    <main>
      <InnerBanner page="procedures" />
      <section className="sec-padd">
        <div className="app-container">
          <div className="grid grid-cols-1">
            <SectionHead
              title={t("top_packages_iran")}
              rightSection={<PackageSearch />}
            />
          </div>
          <div className="h-10"></div>
          <div className="grid grid-cols-4 gap-7">
            {procedures?.map((item, index) => (
              <ProcedureCard
                key={item?.id}
                title={translate("title", item)}
                image={item?.image}
                description={translate("small_description", item)}
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
