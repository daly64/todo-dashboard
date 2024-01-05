import styled from "styled-components";
import Board from "./Board/Board";
import StatusBare from "./StatusBare/StatusBare";

const Style = styled.div`
  width: 80dvw;
  display: flex;
  flex-direction: column;
`;
const MainPanel = () => {
  return (
    <Style>
      <StatusBare />
      <Board />
    </Style>
  );
};

export default MainPanel;
