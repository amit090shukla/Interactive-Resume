import React from "react";
import { Link } from "react-router-dom";
import SidebarData from "./data/sections";
import { GET_ICONS } from "./common/helper";
import styled from "styled-components";

// Styled Components
const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NavItems = styled.div`
  height: 200px;
  cursor: pointer;
`;

const NavHeading = styled.div`
  font-size: 0.9em;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 3px;
  text-align: center;
`;

//---------------------------------------------------------------
const NavBar = (props: any) => {
  const { activeSection } = props;
  const changeSection = (sectionName: string): void => {
    props.changeSection(sectionName);
  };

  return (
    <NavBarContainer>
      {SidebarData.map(({ sectionName, color, stateIdentifier }, index) => (
        <Link
          to={`/${stateIdentifier === "about" ? "" : stateIdentifier}`}
          key={index}
          style={{ width: "20%" }}
        >
          <NavItems
            key={index}
            style={{
              background: `${
                activeSection === stateIdentifier ? "#fff" : color
              }`
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
            <NavHeading
              style={{
                color: `${
                  props.activeSection === stateIdentifier ? color : "#fff"
                }`
              }}
            >
              {sectionName}
            </NavHeading>
          </NavItems>
        </Link>
      ))}
    </NavBarContainer>
  );
};

export default NavBar;
