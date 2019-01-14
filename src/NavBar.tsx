import React from "react";
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
  width: 20%;
`;

const NavHeading = styled.div`
  font-size: 0.9em;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 3px;
  text-align: center;
`;

//---------------------------------------------------------------
const SideBar = (props: any) => {
  const { activeSection } = props;
  const changeSection = (sectionName: string): void => {
    props.changeSection(sectionName);
  };

  return (
    <NavBarContainer>
      {SidebarData.map(({ sectionName, color, stateIdentifier }, index) => (
        <NavItems
          key={index}
          style={{
            background: `${activeSection === stateIdentifier ? "#fff" : color}`
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
      ))}
    </NavBarContainer>
  );
};

export default SideBar;
