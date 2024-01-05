import styled from "styled-components";

const Style = styled.div`
  border-bottom: 1px solid var(--black-100);
  height: 9dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const StatusBare = () => {
  return (
    <Style>
      <p>status bare</p>
    </Style>
  );
};

export default StatusBare;
