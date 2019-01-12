import * as React from "react";

export interface Props {
  currentSection: String;
  bgColor: any;
}

export default class SelectedSectionData extends React.Component<Props, any> {
  public render() {
    return (
      <div style={{ padding: "1% 22%", background: `${this.props.bgColor}` }}>
        <div>{this.props.currentSection}</div>
      </div>
    );
  }
}
