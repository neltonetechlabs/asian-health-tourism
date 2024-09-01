import { UIComponent } from "@/models";
import SectionHeadLink from "../buttons/section.link";

const SectionHead: React.FC<UIComponent.SecHeadTitle> = ({ title }) => {
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="left-sec sec-heading">
        <h4>{title}</h4>
      </div>
      <div className="right-sec">
        <SectionHeadLink title="See All Packages" to="/" />
      </div>
    </div>
  );
};

export default SectionHead;
