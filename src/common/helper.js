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
        <AccountCircle
          style={{
            color: `${isActive ? color : "fff"}`,
            width: "2.5em",
            height: "2.5em",
            margin: "0 36%",
            marginTop: "20%"
          }}
        />
      );
    }
    case "edu": {
      return (
        <AccountBalance
          style={{
            color: `${isActive ? color : "fff"}`,
            width: "2.5em",
            height: "2.5em",
            margin: "0 36%",
            marginTop: "20%"
          }}
        />
      );
    }
    case "certification": {
      return (
        <Class
          style={{
            color: `${isActive ? color : "fff"}`,
            width: "2.5em",
            height: "2.5em",
            margin: "0 36%",
            marginTop: "20%"
          }}
        />
      );
    }
    case "portfolio": {
      return (
        <ColorLens
          style={{
            color: `${isActive ? color : "fff"}`,
            width: "2.5em",
            height: "2.5em",
            margin: "0 36%",
            marginTop: "20%"
          }}
        />
      );
    }
    case "contact": {
      return (
        <Email
          style={{
            color: `${isActive ? color : "fff"}`,
            width: "2.5em",
            height: "2.5em",
            margin: "0 36%",
            marginTop: "20%"
          }}
        />
      );
    }
    case "default": {
      return (
        <AccountCircle
          style={{
            color: `${isActive ? "#000" : "fff"}`,
            width: "2.5em",
            height: "2.5em",
            margin: "0 36%",
            marginTop: "20%"
          }}
        />
      );
    }
  }
  return renderIcon;
};

export default GET_ICONS;
