import styled from "styled-components";
const ProjectsListStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 20dvw;
  text-orientation: upright;
  writing-mode: vertical-lr;
  justify-content: center;
  align-items: center;
  background-color: var(--white-100);
  color: var(--black-100);
`;
const ProjectsList = () => {
  return (
    <ProjectsListStyle>
      <p>projects list</p>
    </ProjectsListStyle>
  );
};

export default ProjectsList;
