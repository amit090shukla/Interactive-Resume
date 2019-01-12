import React, { Component } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Class from "@material-ui/icons/Class";
import ColorLens from "@material-ui/icons/ColorLens";
import Email from "@material-ui/icons/Email";

const GET_ICONS = (sectionName, isActive, color) => {
  let renderIcon;
  switch (sectionName) {
    case "about": {
      return (
        <AccountCircle style={{ color: `${isActive ? "#000" : color}` }} />
      );
    }
    case "edu": {
      return (
        <AccountBalance style={{ color: `${isActive ? "#000" : color}` }} />
      );
    }
    case "certification": {
      return <Class style={{ color: `${isActive ? "#000" : color}` }} />;
    }
    case "portfolio": {
      return <ColorLens style={{ color: `${isActive ? "#000" : color}` }} />;
    }
    case "contact": {
      return <Email style={{ color: `${isActive ? "#000" : color}` }} />;
    }
    case "default": {
      return (
        <AccountCircle style={{ color: `${isActive ? "#000" : color}` }} />
      );
    }
  }
  return renderIcon;
};

export default GET_ICONS;
