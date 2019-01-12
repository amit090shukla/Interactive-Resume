import * as React from "react";
import SideBar from "./SideBar";
import SelectedSectionData from "./SelectedSectionData";
import "./styles/global.css";
import SidebarData from "./data/sections";
import * as _ from "lodash";
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
      <div>
        <SideBar
          changeSection={changeSelectedSection}
          activeSection={this.state.selectedSection}
        />
        <SelectedSectionData
          currentSection={this.state.selectedSection}
          bgColor={bg ? bg.color : "#000"}
        />
      </div>
    );
  }
}

export default App;
