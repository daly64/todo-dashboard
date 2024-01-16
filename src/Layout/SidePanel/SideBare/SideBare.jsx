import Icon from "./Icon/Icon";
import Spacer from "./Spacer/Spacer";
import styled from "styled-components";
const SideBareStyle = styled.div`
  width: 6dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--black-100);
`;
const SideBare = () => {
  return (
    <SideBareStyle>
      <Icon name={"three-points"} />
      <Icon name={"logo"} className="Icon" />
      <Icon name={"projects"} className="Icon" />
      <Icon name={"user"} className="Icon" />
      <Icon name={"calendar"} className="Icon" />
      <Icon name={"statics"} className="Icon" />
      <Icon name={"downloads"} className="Icon" />
      <Icon name={"settings"} className="Icon" />
      <Spacer />
      <Icon name={"exit"} className="Icon" />
    </SideBareStyle>
  );
};

export default SideBare;
