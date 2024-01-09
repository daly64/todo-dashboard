import React from "react";
import "./Icon.css";
import icons from "./Icons.json";

function Icon({ name, className="" }) {
  let icon = icons.find((icon) => {
    return icon.name == name;
  });

  return (
    <>
      <img className={className} src={icon.src} alt={icon.name} />
    </>
  );
}

export default Icon;
