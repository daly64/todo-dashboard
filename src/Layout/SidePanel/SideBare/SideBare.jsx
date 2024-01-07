import "./SideBare.css";
const SideBare = () => {
  return (
    <div className="SideBare">
      {/* <p>side bare</p> */}

      <img src="/src/assets/icons/three-points.svg" alt="three-points" />
      <img className="Icon" src="/src/assets/icons/logo.svg" alt="logo" />
      <img
        className="Icon"
        src="/src/assets/icons/projects.svg"
        alt="projects"
      />
      <img className="Icon" src="/src/assets/icons/user.svg" alt="user" />
      <img
        className="Icon"
        src="/src/assets/icons/calendar.svg"
        alt="calendar"
      />
      <img className="Icon" src="/src/assets/icons/statics.svg" alt="statics" />
      <img
        className="Icon"
        src="/src/assets/icons/downloads.svg"
        alt="downloads"
      />
      <img className="Icon" src="/src/assets/icons/plans.svg" alt="plans" />
      <img
        className="Icon"
        src="/src/assets/icons/settings.svg"
        alt="settings"
      />
      <div className="Spacer" />
      <img className="Icon" src="/src/assets/icons/exit.svg" alt="exit" />
    </div>
  );
};

export default SideBare;
