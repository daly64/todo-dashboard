import styled from "styled-components";
const Style = styled.div`
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
    <Style>
      <p>projects list</p>
    </Style>
  );
};

export default ProjectsList;
