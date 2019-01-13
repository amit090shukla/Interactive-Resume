import React from "react";
import SidebarData from "./data/sections";
import { GET_ICONS } from "./common/helper";
import { Typography, Paper } from "@material-ui/core";
import "./styles/global.css";

const SideBar = (props: any) => {
  const { activeSection } = props;

  const changeSection = (sectionName: string): void => {
    props.changeSection(sectionName);
  };

  return (
    <Paper className="d-f" style={{ justifyContent: "space-around" }}>
      {SidebarData.map(({ sectionName, color, stateIdentifier }, index) => (
        <div
          key={index}
          style={{
            height: "200px",
            background: `${activeSection === stateIdentifier ? "#fff" : color}`,
            cursor: "pointer",
            width: "20%"
          }}
          onClick={() => changeSection(stateIdentifier)}
        >
          <span>
            {GET_ICONS(
              stateIdentifier,
              stateIdentifier === activeSection,
              color
            )}
          </span>
          <Typography
            style={{
              color: `${
                props.activeSection === stateIdentifier ? color : "#fff"
              }`,
              fontSize: "0.9em",
              textTransform: "uppercase",
              fontWeight: "bold",
              letterSpacing: "3px"
            }}
            align="center"
          >
            {sectionName}
          </Typography>
        </div>
      ))}
    </Paper>
  );
};

export default SideBar;
