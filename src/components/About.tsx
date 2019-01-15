import * as React from "react";
import "../styles/global.css";
import profileImage from "../assets/download.png";
export interface AboutProps {}

export default class About extends React.Component<AboutProps, any> {
  public render() {
    return (
      <div>
        <h1>Wow, a whole page just about me!😍</h1>
        <div
          className="section-container d-f"
          style={{ justifyContent: "space-between" }}
        >
          <div className="image" style={{ width: "15%" }}>
            <img
              src={profileImage}
              alt="Profile Image"
              style={{ width: "100%" }}
            />
          </div>
          <div className="about-me" style={{ width: "82%" }}>
            <h4>Me talking about myself</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              est qui vero, expedita amet commodi porro similique, dolorem
              fugit, earum neque enim architecto consequuntur ad. Molestiae id
              animi dolorum officia.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              tenetur, dolore adipisci deleniti unde, aspernatur ea animi,
              incidunt rerum eligendi voluptates iure doloremque delectus illum.
              Repellendus, aut. Iusto, doloribus pariatur.
            </span>
          </div>
        </div>
      </div>
    );
  }
}
