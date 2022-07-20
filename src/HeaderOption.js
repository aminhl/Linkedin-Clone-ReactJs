import React from "react";
import "./HeaderOption.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function HeaderOption({ Avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__Icon" />}
      {Avatar && (
        <AccountCircleIcon className="headerOption__Icon" src={Avatar} />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
