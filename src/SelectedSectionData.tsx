import * as React from "react";
import { Paper } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import About from "./components/About";
import Education from "./components/Education";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

interface Props {
  bgColor: any;
}
interface RouterProps {
  tab: any;
}
export default class SelectedSectionData extends React.Component<
  Props & RouteComponentProps<RouterProps>,
  any
> {
  getSectionComponent = (bgColor: String) => {
    const tab = this.props.match.params.tab;
    switch (tab) {
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
      default:
        return <About />;
    }
  };
  public render() {
    return (
      <Paper
        style={{
          padding: "1% 5%",
          background: `#fff`,
          color: "#000"
        }}
      >
        {this.getSectionComponent(this.props.bgColor)}
      </Paper>
    );
  }
}
