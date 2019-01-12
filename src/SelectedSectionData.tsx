import * as React from "react";
import { Paper } from "@material-ui/core";

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
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quo
          pariatur sint ea quam exercitationem hic, eos dolorum recusandae.
          Magni odit laboriosam atque veniam at id, ducimus modi exercitationem!
          Amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Molestias sequi blanditiis minima libero pariatur quos atque molestiae
          vitae deleniti expedita ipsa cum aliquid beatae, dolor, minus, tenetur
          veniam a eveniet. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Velit ducimus ullam assumenda. Nemo, vero. Laudantium repellat
          labore deleniti, soluta reprehenderit, ipsa ex accusamus veritatis
          nostrum quis necessitatibus aperiam adipisci ratione. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Aut explicabo, dolores
          omnis pariatur facilis deleniti voluptatibus! Provident laudantium,
          laborum consectetur, pariatur dolore molestias adipisci laboriosam
          corporis reiciendis ut similique porro. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Mollitia dolores ad non? Fugiat culpa a
          enim cumque ut eveniet ipsa sit officia id. Asperiores culpa eum
          dolore quae reiciendis in? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloribus cumque qui magni illo mollitia. Deserunt
          aut veniam, blanditiis provident, itaque quidem voluptates nostrum
          nulla voluptatibus eos id minima laudantium quam!
        </div>
      </Paper>
    );
  }
}
