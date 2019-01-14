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
import { FaJsSquare, FaReact, FaCss3, FaHtml5, FaVuejs } from "react-icons/fa";

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

export const CERTIFICATES = [
  {
    name: "Emotional Design — How to Make Products People Will Love",
    link: "#"
  },
  { name: "User Research – Methods and Best Practices", link: "#" },
  { name: "Mobile User Experience (UX) Design", link: "#" }
];

const iconStyle = {
  width: "3em",
  height: "3em"
};

export const PROGRAMMING_SKILLS = [
  {
    name: "Javascript",
    icon: <FaJsSquare style={iconStyle} color="#f7df1e" />
  },
  {
    name: "ReactJS",
    icon: <FaReact style={iconStyle} color="#00d8ff" />
  },
  {
    name: "VueJS",
    icon: <FaVuejs style={iconStyle} color="#42b883" />
  }
];

export const DESIGNING_SKILLS = [
  {
    name: "CSS3",
    icon: <FaCss3 style={iconStyle} color="#002561" />
  },
  {
    name: "HTML5",
    icon: <FaHtml5 style={iconStyle} color="#e34f26" />
  },
  {
    name: "Adobe XD",
    icon: (
      <i
        className="fab fa-adobe"
        style={{ fontSize: "3em", color: "#ff0000" }}
      />
    )
  },
  {
    name: "Sketch",
    icon: (
      <i
        className="fab fa-sketch"
        style={{ fontSize: "3em", color: "#fa6400" }}
      />
    )
  },
  {
    name: "Figma",
    icon: (
      <i
        className="fab fa-figma"
        style={{ fontSize: "3em", color: "rgb(138, 138, 138)" }}
      />
    )
  },
  {
    name: "Invision",
    icon: (
      <i
        className="fab fa-invision"
        style={{ fontSize: "3em", color: "#ff3366" }}
      />
    )
  }
];
