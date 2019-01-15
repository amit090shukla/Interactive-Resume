import * as React from "react";
import { Paper } from "@material-ui/core";
import { GET_SECTION_DATA_FROM_NAME } from "./common/helper";

export interface Props {
  currentSection: String;
  bgColor: any;
}

export default class SelectedSectionData extends React.Component<Props, any> {
  public render() {
    return (
      <Paper
        style={{
          padding: "1% 5%",
          background: `#fff`,
          color: "#000"
        }}
      >
        {GET_SECTION_DATA_FROM_NAME(
          this.props.currentSection,
          this.props.bgColor
        )}
      </Paper>
    );
  }
}
