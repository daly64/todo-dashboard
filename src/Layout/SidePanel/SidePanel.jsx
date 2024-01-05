import styled from "styled-components";
import SideBare from "./SideBare/SideBare";
import ProjectsList from "./ProjectsList/ProjectsList";

const Style = styled.div`
  border-right: 1px solid var(--black-100);
  width: 26dvw;
  display: flex;
  flex-direction: row;  
`;

const SidePanel = () => {
  return (
    <Style>
      <SideBare/>  
      <ProjectsList/>
    </Style>
  );
};

export default SidePanel;
