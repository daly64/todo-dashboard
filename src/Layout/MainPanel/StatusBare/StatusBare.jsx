import styled from "styled-components";
const StatusBareStyle = styled.div`
  border-bottom: 1px solid var(--black-100);
  height: 9dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const StatusBare = () => {
  return (
    <StatusBareStyle>
      <p>status bare</p>
    </StatusBareStyle>
  );
};

export default StatusBare;
