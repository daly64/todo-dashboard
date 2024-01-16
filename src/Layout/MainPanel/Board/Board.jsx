import styled from "styled-components";
const BoardStyle = styled.div`
  height: 91dvh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Board = () => {
  return (
    <BoardStyle>
      <p>board</p>
    </BoardStyle>
  );
};

export default Board;
