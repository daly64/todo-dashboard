import styled from "styled-components";
const Style = styled.div`
  width: 6dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-orientation: upright;
  writing-mode: vertical-lr;
  color: var(--white-100);
  background-color: var(--black-100);
`;
const SideBare = () => {
  return (
    <Style>
      <p>side bare</p>
    </Style>
  );
};

export default SideBare;
