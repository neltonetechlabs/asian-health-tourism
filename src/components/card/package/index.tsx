import Image from "next/image";
import Link from "next/link";

import { BlueChevron, Demo, Hotel, Transfer, Translator, Visa } from "@/assets";

import classes from "./style.module.css";

const PackageCard = () => {
  return (
    <div className={classes.packagecard}>
      <div className={classes.pckgimg}>
        <Image alt="Surgery" src={Demo} />
      </div>
      <div className={classes.pckgContent}>
        <h5>Surgery</h5>
        <div className={classes.pckgFeatures}>
          <ul>
            <li className={classes.pckgFeat}>
              <div className={classes.pckgicon}>
                <Image alt="Hotel" src={Hotel} />
              </div>
              <h4>Hotel</h4>
            </li>
            <li className={classes.pckgFeat}>
              <div className={classes.pckgicon}>
                <Image alt="Transfer" src={Transfer} />
              </div>
              <h4>Transfer</h4>
            </li>
            <li className={classes.pckgFeat}>
              <div className={classes.pckgicon}>
                <Image alt="Visa" src={Visa} />
              </div>
              <h4>Visa</h4>
            </li>
            <li className={classes.pckgFeat}>
              <div className={classes.pckgicon}>
                <Image alt="Interpreter" src={Translator} />
              </div>
              <h4>Interpreter</h4>
            </li>
          </ul>
        </div>
        <Link href="/" title="See prices" className={classes.pckgLink}>
          <span>See Prices</span>
          <Image alt="See prices" src={BlueChevron} />
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
