import styled from "styled-components";
const IconStyle = styled.div`
  img {
    padding: 2dvh 3dvw;
    height: 7dvh;
  }
  img.Icon:hover {
    background-color: var(--white-20);
    padding: 2dvh 3dvw;
  }
  img.Icon:active {
    background-color: var(--white-40);
    border-radius: 50%;
    padding: 2dvh 1dvw;
  }
`;
let icons = [
  { name: "three-points", src: "/src/assets/icons/three-points.svg" },
  { name: "logo", src: "/src/assets/icons/logo.svg" },
  { name: "projects", src: "/src/assets/icons/projects.svg" },
  { name: "user", src: "/src/assets/icons/user.svg" },
  { name: "calendar", src: "/src/assets/icons/calendar.svg" },
  { name: "statics", src: "/src/assets/icons/statics.svg" },
  { name: "downloads", src: "/src/assets/icons/downloads.svg" },
  { name: "plans", src: "/src/assets/icons/plans.svg" },
  { name: "settings", src: "/src/assets/icons/settings.svg" },
  { name: "exit", src: "/src/assets/icons/exit.svg" },
];

function Icon({ name = "", className = "" }) {
  function toFindIcon(icon) {
    return icon.name == name;
  }
  let icon = icons.find(toFindIcon);

  return (
    <IconStyle>
      <img className={className} src={icon.src} alt={icon.name} />
    </IconStyle>
  );
}

export default Icon;
