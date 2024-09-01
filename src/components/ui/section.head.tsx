import { UIComponent } from "@/models";
import SectionHeadLink from "../buttons/section.link";

const SectionHead: React.FC<UIComponent.SecHeadTitle> = ({ title, rightTitle, rightTarget }) => {
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="left-sec sec-heading">
        <h4>{title}</h4>
      </div>
      {rightTitle && rightTarget && (
        <div className="right-sec">
          <SectionHeadLink title={rightTitle} to={rightTarget} />
        </div>
      )}
    </div>
  );
};

export default SectionHead;
