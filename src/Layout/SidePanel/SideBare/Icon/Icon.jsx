import React from "react";
import "./Icon.css";
import icons from "./Icons.json";

function Icon({ name, className = "" }) {
  function toFindIcon(icon) {
    return icon.name == name;
  }
  let icon = icons.find(toFindIcon);

  return (
    <>
      <img className={className} src={icon.src} alt={icon.name} />
    </>
  );
}

export default Icon;
