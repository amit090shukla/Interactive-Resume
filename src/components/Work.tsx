import * as React from "react";
import {
  FaReact,
  FaJsSquare,
  FaBitbucket,
  FaHtml5,
  FaCss3,
  FaGitSquare
} from "react-icons/fa";
import developer from "../assets/developer.svg";
export interface WorkProps {}

const workContainerStyle = {
  padding: "20px 10px",
  margin: "20px 20px 20px 0",
  border: "1px solid #e4e4e4",
  borderRadius: "3px",
  width: "100%"
};

export default class Work extends React.Component<WorkProps, any> {
  public render() {
    return (
      <div>
        {" "}
        <h1>Places I have worked 💤 </h1>
        <div className="d-f" style={{ justifyContent: "space-between" }}>
          <div className="image" style={{ width: "40%" }}>
            <img
              src={developer}
              alt="Profile Image"
              style={{ width: "100%", position: "sticky", top: "0" }}
            />
          </div>
          <div className="d-f-c" style={{ width: "55%" }}>
            <div style={workContainerStyle}>
              <h3>Ontic Technologies</h3>
              <p style={{ fontWeight: "bold", color: "rgb(121, 121, 121)" }}>
                UI Engineer
              </p>
              <div>
                <FaReact color="#00d8ff" style={{ marginRight: "8px" }} />
                <FaJsSquare color="#f7df1e" style={{ marginRight: "8px" }} />
                <FaCss3 color="#6534ac" style={{ marginRight: "8px" }} />
                <FaHtml5 color="#e34f26" style={{ marginRight: "8px" }} />
                <FaGitSquare color="#333" style={{ marginRight: "8px" }} />
              </div>
              <span>Working on Machine Assisted Protective Intelligence. </span>
              <br />
            </div>
            <div style={workContainerStyle}>
              <h3>Voylla Fashions Private Limited</h3>
              <p style={{ fontWeight: "bold", color: "rgb(121, 121, 121)" }}>
                Software Developer
              </p>
              <div>
                <FaReact color="#00d8ff" style={{ marginRight: "8px" }} />
                <FaJsSquare color="#f7df1e" style={{ marginRight: "8px" }} />
                <FaCss3 color="#6534ac" style={{ marginRight: "8px" }} />
                <FaHtml5 color="#e34f26" style={{ marginRight: "8px" }} />
                <FaBitbucket color="#205081" style={{ marginRight: "8px" }} />
              </div>
              <span>
                Part of the website team responsible for developing the online
                e-commerce platform from scratch using ReactJS and Ruby on Rails
                at the backend.
                <ul>
                  <li>
                    Implemented routing on the website using React Router.{" "}
                  </li>
                  <li>
                    Optimized the website load time by using concepts like
                    sprite images to reduce server requests and Lazyload for
                    content heavy sections.{" "}
                  </li>
                  <li>
                    Implemented social login buttons (Google and Facebook).
                  </li>
                  <li>
                    Worked extensively on Order tracking section of the website.
                    Used RESTful APIs/AJAX calls to fetch and post data.
                  </li>
                  <li>
                    Fully page load time reduced to 4sec from 6.2sec earlier and
                    no. of server requests also went down to 102 from 120 for
                    the landing page after switching to React{" "}
                  </li>
                  <li>
                    Worked extensively on MDL(Material Design Lite) framework to
                    make the website responsive along with JQuery, CSS3, HTML 5
                    and ES6.
                  </li>
                </ul>
              </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
