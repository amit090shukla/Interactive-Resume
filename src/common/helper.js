import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Work from "../components/Work";
import ColorLens from "@material-ui/icons/ColorLens";
import { Work as WorkIcon } from "@material-ui/icons/";
import Email from "@material-ui/icons/Email";
import About from "../components/About";
import Education from "../components/Education";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export const GET_ICONS = (sectionName, isActive, color) => {
  // Style Object For Icons
  const iconStyles = {
    color: `${isActive ? color : "fff"}`,
    width: "2em",
    height: "2em",
    margin: "0 39%",
    marginTop: "20%"
  };

  switch (sectionName) {
    case "about": {
      return <AccountCircle style={iconStyles} />;
    }
    case "edu": {
      return <AccountBalance style={iconStyles} />;
    }
    case "work": {
      return <WorkIcon style={iconStyles} />;
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

export const GET_SECTION_DATA_FROM_NAME = (sectionName, bgColor) => {
  switch (sectionName) {
    case "about": {
      return <About />;
    }
    case "edu": {
      return <Education />;
    }
    case "work": {
      return <Work />;
    }
    case "portfolio": {
      return <Portfolio />;
    }
    case "contact": {
      return <Contact color={bgColor} />;
    }
    default: {
      return null;
    }
  }
};
