import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Class from "@material-ui/icons/Class";
import ColorLens from "@material-ui/icons/ColorLens";
import Email from "@material-ui/icons/Email";

const SidebarData = [
  {
    sectionName: "About Me",
    color: "#e53935",
    id: "",
    icon: <AccountCircle />,
    stateIdentifier: "about"
  },
  {
    sectionName: "Education",
    color: "#9c27b0",
    id: "",
    icon: <AccountBalance />,
    stateIdentifier: "edu"
  },
  {
    sectionName: "Certifications",
    color: "#2196f3",
    id: "",
    icon: <Class />,
    stateIdentifier: "certification"
  },
  {
    sectionName: "Portfolio",
    color: "#009688",
    id: "",
    icon: <ColorLens />,
    stateIdentifier: "portfolio"
  },
  {
    sectionName: "Contact Me",
    color: "#43a047",
    id: "",
    icon: <Email />,
    stateIdentifier: "contact"
  }
];

export default SidebarData;
