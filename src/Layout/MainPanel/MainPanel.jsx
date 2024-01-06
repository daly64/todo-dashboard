import "./MainPanel.css"
import Board from "./Board/Board";
import StatusBare from "./StatusBare/StatusBare";

const MainPanel = () => {
  return (
    <div className="MainPanel">
      <StatusBare />
      <Board />
    </div>
  );
};

export default MainPanel;
