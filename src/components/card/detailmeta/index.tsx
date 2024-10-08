import Image from "next/image";

import { Chevron, Demo1 } from "@/assets";
import AppButton from "@/components/buttons/button.common";
import { ButtonType, ButtonVariant } from "@/enum/enum";

import style from './style.module.css';

const DetailMeta = () => {
  return (
    <div className="sec-padd">
      <div className="app-container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-1"></div>
          <div className="col-span-10">
            <div className="grid grid-cols-2 gap-20">
              <figure className="rounded-xl overflow-hidden">
                <Image alt="Destination" src={Demo1} />
              </figure>
              <div className={style.contentSec}>
                <h3>Isfahan</h3>
                <article>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, It has survived not
                  only five centuries, a galley of type and scrambled it to
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
