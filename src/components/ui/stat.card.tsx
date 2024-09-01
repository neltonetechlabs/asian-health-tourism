import { UIComponent } from "@/models";

const StatCard: React.FC<UIComponent.StatCardProps> = ({
    title,
    count
}) => {
  return (
    <div className="stat-card">
      <h2>{count}</h2>
      <h6>{title}</h6>
    </div>
  );
};

export default StatCard;
