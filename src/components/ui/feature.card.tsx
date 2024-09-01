import { TickBox } from "@/assets";
import { UIComponent } from "@/models";
import Image from "next/image";

const FeatureCard: React.FC<UIComponent.FeatureCardProps> = ({
  icon = TickBox,
  title,
}) => {
  return (
    <div className="feature-card">
      <div className="feat-icon">
        <Image src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default FeatureCard;
