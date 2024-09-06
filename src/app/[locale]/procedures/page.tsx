import { Demo, Demo1, Demo2, Demo3 } from "@/assets";
import {
  InnerBanner,
  LatestBlog,
  PackageSearch,
  ProcedureCard,
  SectionHead,
} from "@/components";
import { ListCardProps } from "@/models/component";
import { NextPage } from "next";
import { useTranslations } from "next-intl";

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

const Procedures: NextPage = () => {
  const t = useTranslations("Common");
  return (
    <main>
      <InnerBanner
        title="Procedures"
        subTitle="Asian Health Tourism is the biggest medical tourism and healthcare service provider in Iran"
      />
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
            {demoProcedures?.map((item, index) => (
              <ProcedureCard
                key={index}
                title={item?.title}
                image={item?.image}
                description={item?.description}
                slug={item?.slug}
              />
            ))}
          </div>
        </div>
      </section>
      <LatestBlog />
    </main>
  );
};

export default Procedures;
