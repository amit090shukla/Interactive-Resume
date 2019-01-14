import * as React from "react";
import NavBar from "./NavBar";
import SelectedSectionData from "./SelectedSectionData";
import "./styles/global.css";
import SidebarData from "./data/sections";
import * as _ from "lodash";
import styled from "styled-components";

// Styled Components
const AppContainer = styled.div`
  box-shadow: 0 0 50px #171717;
`;

//------------------------------------------------------
interface State {
  selectedSection: String;
}
class App extends React.Component<{}, State> {
  state: State = {
    selectedSection: "about"
  };
  render() {
    const changeSelectedSection = (newSection: String): void => {
      this.setState({ selectedSection: newSection });
    };
    let bg = _.find(
      SidebarData,
      val => val.stateIdentifier === this.state.selectedSection
    );
    return (
      <AppContainer>
        <NavBar
          changeSection={changeSelectedSection}
          activeSection={this.state.selectedSection}
        />
        <SelectedSectionData
          currentSection={this.state.selectedSection}
          bgColor={bg ? bg.color : "#000"}
        />
      </AppContainer>
    );
  }
}

export default App;
