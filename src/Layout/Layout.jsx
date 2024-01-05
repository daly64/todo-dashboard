import SidePanel from "./SidePanel/SidePanel";
import MainPanel from "./mainPanel/MainPanel";
import styled from "styled-components";

const Style = styled.div`
  @import "./base.css";
  display: flex;
  flex-direction: row;
  width: 100dvw;
  height: 100dvh;
`;
const Layout = () => {
  return (
    <Style>
      <SidePanel />
      <MainPanel />
    </Style>
  );
};

export default Layout;
