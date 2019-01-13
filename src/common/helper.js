import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Class from "@material-ui/icons/Class";
import ColorLens from "@material-ui/icons/ColorLens";
import Email from "@material-ui/icons/Email";

const GET_ICONS = (sectionName, isActive, color) => {
  // Style Object For Icons
  const iconStyles = {
    color: `${isActive ? color : "fff"}`,
    width: "2em",
    height: "2em",
    margin: "0 36%",
    marginTop: "20%"
  };

  switch (sectionName) {
    case "about": {
      return <AccountCircle style={iconStyles} />;
    }
    case "edu": {
      return <AccountBalance style={iconStyles} />;
    }
    case "certification": {
      return <Class style={iconStyles} />;
    }
    case "portfolio": {
      return <ColorLens style={iconStyles} />;
    }
    case "contact": {
      return <Email style={iconStyles} />;
    }
    default: {
      return <AccountCircle style={iconStyles} />;
    }
  }
};

export default GET_ICONS;
