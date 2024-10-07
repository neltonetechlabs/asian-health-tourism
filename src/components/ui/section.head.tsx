import { UIComponent } from "@/models";
import SectionHeadLink from "../buttons/section.link";
import { getLocale } from "next-intl/server";

const SectionHead: React.FC<UIComponent.SecHeadTitle> = async ({
  title,
  rightTitle,
  rightTarget,
  rightSection,
}) => {
  const locale = await getLocale();
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="left-sec sec-heading">
        <h4>{title}</h4>
      </div>
      {rightTitle && rightTarget && (
        <div className="right-sec">
          <SectionHeadLink title={rightTitle} to={`/${locale}/${rightTarget}`} />
        </div>
      )}
      <div className="right-sec-elm">{rightSection && rightSection}</div>
    </div>
  );
};

export default SectionHead;
