import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ColorLens from "@material-ui/icons/ColorLens";
import { Work as WorkIcon } from "@material-ui/icons/";
import Email from "@material-ui/icons/Email";
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

export const CERTIFICATES = [
  {
    name: "Emotional Design — How to Make Products People Will Love",
    link:
      "https://www.interaction-design.org/amit-shukla/certificate/course/Prrlkx5rt"
  },
  {
    name: "User Research – Methods and Best Practices",
    link:
      "https://www.interaction-design.org/amit-shukla/certificate/course/Prrk5g4TR"
  },
  {
    name: "Mobile User Experience (UX) Design",
    link:
      "https://www.interaction-design.org/amit-shukla/certificate/course/P0JN2lMg0"
  }
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

export const BOOKS = [
  { name: "12 Rules for Life", isbn: "9780241351659" },
  {
    name: "Hooked: How to Build Habit-Forming Products",
    isbn: "9780143193524"
  },
  { name: "The Design of Everyday Things", isbn: "9780465050659" },

  { name: "You Don't Know JS", isbn: "9781449335588" },
  { name: "Rich Dad Poor Dad", isbn: "9789796559275" },
  { name: "Think and Grow Rich", isbn: "9788193540107" },
  { name: "Don't Make Me Think", isbn: "9783958457669" }
];
