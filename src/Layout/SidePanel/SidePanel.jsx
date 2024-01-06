import SideBare from "./SideBare/SideBare";
import ProjectsList from "./ProjectsList/ProjectsList";
import "./SidePanel.css"

const SidePanel = () => {
  return (
    <div className="SidePanel">
      <SideBare/>  
      <ProjectsList/>
    </div>
  );
};

export default SidePanel;
