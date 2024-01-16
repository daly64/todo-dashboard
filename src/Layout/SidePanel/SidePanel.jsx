import SideBare from "./SideBare/SideBare";
import ProjectsList from "./ProjectsList/ProjectsList";
import styled from "styled-components";
const SidePanelStyle = styled.div`
  border-right: 1px solid var(--black-100);
  width: 26dvw;
  display: flex;
  flex-direction: row;
`;
const SidePanel = () => {
  return (
    <SidePanelStyle>
      <SideBare />
      <ProjectsList />
    </SidePanelStyle>
  );
};

export default SidePanel;
