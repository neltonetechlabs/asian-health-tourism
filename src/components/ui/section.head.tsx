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
    <div className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-1 items-center text-left rtl:text-right">
      <div className="left-sec sec-heading lg:col-auto md:col-span-2 md:mb-0 mb-4">
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
