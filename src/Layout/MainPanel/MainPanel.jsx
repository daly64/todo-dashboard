import Board from "./Board/Board";
import StatusBare from "./StatusBare/StatusBare";
import styled from "styled-components";
const MainPanelStyle = styled.div`
  width: 80dvw;
  display: flex;
  flex-direction: column;
`;
const MainPanel = () => {
  return (
    <MainPanelStyle>
      <StatusBare />
      <Board />
    </MainPanelStyle>
  );
};

export default MainPanel;
