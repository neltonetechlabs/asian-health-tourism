import Image from "next/image";

import { Chevron, Demo1 } from "@/assets";
import AppButton from "@/components/buttons/button.common";
import { ButtonType, ButtonVariant } from "@/enum/enum";

import style from './style.module.css';

interface DetailMetaProps {
  title: string;
  image: string;
  description: string;
}

const DetailMeta: React.FC<DetailMetaProps> = ({
  title,
  image,
  description
}) => {
  return (
    <div className="sec-padd">
      <div className="app-container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-1"></div>
          <div className="col-span-10">
            <div className="grid grid-cols-2 gap-20">
              <figure className="rounded-xl overflow-hidden md:max-h-[300px] max-h-auto">
                <Image alt={title} src={image || Demo1} width={600} height={300} />
              </figure>
              <div className={style.contentSec}>
                <h3>{title}</h3>
                <article>
                  {description}
                </article>
                <AppButton
                  title="contact now"
                  type={ButtonType.FILLED}
                  variant={ButtonVariant.PRIMARY}
                  leftImage={Chevron}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailMeta;
