import Icon from "./Icon/Icon";
import "./SideBare.css";
const SideBare = () => {
  return (
    <div className="SideBare">
      <Icon name={"three-points"} />
      <Icon name={"logo"} className="Icon" />
      <Icon name={"projects"} className="Icon" />
      <Icon name={"user"} className="Icon" />
      <Icon name={"calendar"} className="Icon" />
      <Icon name={"statics"} className="Icon" />
      <Icon name={"downloads"} className="Icon" />
      <Icon name={"settings"} className="Icon" />
      <div className="Spacer" />
      <Icon name={"exit"} className="Icon" />
    </div>
  );
};

export default SideBare;
