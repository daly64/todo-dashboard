import SidePanel from "./SidePanel/SidePanel";
import MainPanel from "./mainPanel/MainPanel";
import "./Layout.css";
const Layout = () => {
  return (
    <div className="Layout">
      <SidePanel />
      <MainPanel />
    </div>
  );
};

export default Layout;
