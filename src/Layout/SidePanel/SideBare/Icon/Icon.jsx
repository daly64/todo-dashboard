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
    <>
      <img className={className} src={icon.src} alt={icon.name} />
    </>
  );
}

export default Icon;
