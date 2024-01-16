import SidePanel from "./SidePanel/SidePanel";
import MainPanel from "./mainPanel/MainPanel";
import styled from "styled-components";
const LayoutStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100dvw;
  height: 100dvh;
`;

const Layout = () => {
  return (
    <LayoutStyle>
      <SidePanel />
      <MainPanel />
    </LayoutStyle>
  );
};

export default Layout;
