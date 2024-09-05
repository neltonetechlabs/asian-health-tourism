import { UIComponent } from "@/models";

const CheckList: React.FC<UIComponent.CheckListProps> = ({ listItems }) => {
  if (listItems?.length > 0) {
    return (
      <ul className="checklist">
        {listItems?.map((item, index) => (
          <li key={index}><span>**</span>{item}</li>
        ))}
      </ul>
    );
  }
  return <></>;
};

export default CheckList;
