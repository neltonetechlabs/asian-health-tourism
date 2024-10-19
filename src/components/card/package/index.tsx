import Image from "next/image";
import Link from "next/link";

import { BlueChevron, CheckedBoxBlue, Demo, Hotel, Transfer, Translator, Visa } from "@/assets";

import classes from "./style.module.css";
import { ProcedureData } from "@/models/api.data";
import useAppLocale from "@/hooks/useAppLocale";
import ImageWithFallBack from "@/components/ui/imagewithfallback";

const PackageCard: React.FC<{ data: ProcedureData; locale: string }> = ({
  data,
  locale,
}) => {
  const { translate } = useAppLocale({ locale });
  return (
    <Link href={`/${locale}/procedures/${data?.slug}`} className={classes.pckgcardlink}>
      <div className={classes.packagecard}>
        <div className={classes.pckgimg}>
          <ImageWithFallBack alt={data?.title_en} src={data?.image || ""} />
        </div>
        <div className={classes.pckgContent}>
          <h5>{translate("title", data)}</h5>
          {data?.package_features.length ?? 0 ? (
            <div className={classes.pckgFeatures}>
              <ul>
                {data?.package_features?.map((pckgFeat) => (
                  <li className={classes.pckgFeat} key={pckgFeat?.id}>
                    <div className={classes.pckgicon}>
                      <Image alt="Hotel" src={pckgFeat?.image || Translator} />
                    </div>
                    <h4>{translate("feature", pckgFeat)}</h4>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <></>
          )}
          <div className={classes.pckgLink}>
            <span>See Prices</span>
            <Image alt="See prices" src={BlueChevron} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;
