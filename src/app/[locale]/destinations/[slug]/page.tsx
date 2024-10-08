import { NextPage } from "next";
import Image from "next/image";
import { Demo1 } from "@/assets";

import { UIComponent } from "@/models";
import DetailMeta from "@/components/card/detailmeta";

const DestinationDetail: NextPage<UIComponent.DetailPageParam> = () => {
  return (
    <main>
      <DetailMeta />
    </main>
  );
};

export default DestinationDetail;
