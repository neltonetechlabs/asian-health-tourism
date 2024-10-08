import Image from "next/image";
import { UIComponent } from "@/models";
import { CheckedBox } from "@/assets";

const CheckList: React.FC<UIComponent.CheckListProps> = ({ listItems }) => {
  if (listItems?.length > 0) {
    return (
      <ul className="checklist">
        {listItems?.map((item, index) => (
          <li key={index}><span><Image src={CheckedBox} alt="" /> </span>{item}</li>
        ))}
      </ul>
    );
  }
  return <></>;
};

export default CheckList;
