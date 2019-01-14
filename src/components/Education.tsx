import * as React from "react";
import {
  FaJsSquare,
  FaReact,
  FaCss3,
  FaHtml5,
  FaVuejs,
  FaGit
} from "react-icons/all";
export interface EducationProps {}
const eduContainerStyle = {
  padding: "20px 10px",
  margin: "20px 20px 20px 0",
  border: "1px solid #e4e4e4",
  borderRadius: "3px",
  width: "45%"
};
export default class Education extends React.Component<EducationProps, any> {
  public render() {
    return (
      <div>
        <h1>My Educational Background 👨‍🎓 </h1>
        <div className="d-f" style={{ justifyContent: "space-between" }}>
          <div style={eduContainerStyle}>
            <h3>B.Tech in Computer Science & Engineering</h3>
            <span>LNMIIT Jaipur</span>
            <br />
            <span>2014-2018</span>
          </div>
          <div style={eduContainerStyle}>
            <h3>UX Certifications 📑</h3>
            <div>
              <div>
                <span>
                  Emotional Design — How to Make Products People Will Love{" "}
                </span>
                <a
                  href="#"
                  target="_blank"
                  style={{
                    color: "rgb(42, 206, 113)",
                    fontSize: "1.1em",
                    fontWeight: "bold"
                  }}
                >
                  View
                </a>
              </div>
              <div>
                <span>User Research – Methods and Best Practices </span>
                <a
                  href="#"
                  target="_blank"
                  style={{
                    color: "rgb(42, 206, 113)",
                    fontSize: "1.1em",
                    fontWeight: "bold"
                  }}
                >
                  View
                </a>
              </div>
              <div>
                <span>Mobile User Experience (UX) Design </span>
                <a
                  href="#"
                  target="_blank"
                  style={{
                    color: "rgb(42, 206, 113)",
                    fontSize: "1.1em",
                    fontWeight: "bold"
                  }}
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2>Programming Skills 💪</h2>
        <div className="d-f" style={{}}>
          <div style={{ width: "10%" }}>
            <FaJsSquare size="3em" color="#f7df1e" />
            <div>Javascript</div>
          </div>
          <div style={{ width: "10%" }}>
            <FaReact size="3em" color="#00d8ff" />
            <div>React</div>
          </div>
          <div style={{ width: "10%" }}>
            <FaVuejs size="3em" color="#42b883" />
            <div>VueJS</div>
          </div>
          <div style={{ width: "10%" }}>
            <FaGit size="3em" color="#333" />
            <div>Git</div>
          </div>
        </div>
        <h2>Designing Skills pen 🖋</h2>
        <div className="d-f">
          <div style={{ width: "10%" }}>
            <FaCss3 size="3em" color="#002561" />
            <div>CSS3</div>
          </div>
          <div style={{ width: "10%" }}>
            <FaHtml5 size="3em" color="#e34f26" />
            <div>HTML5</div>
          </div>
          <div style={{ width: "10%" }}>
            <i
              className="fab fa-adobe"
              style={{ fontSize: "3em", color: "#ff0000" }}
            />
            <div>Adobe XD</div>
          </div>
          <div style={{ width: "10%" }}>
            <i
              className="fab fa-sketch"
              style={{ fontSize: "3em", color: "#fa6400" }}
            />
            <div>Sketch</div>
          </div>
          <div style={{ width: "10%" }}>
            <i
              className="fab fa-figma"
              style={{ fontSize: "3em", color: "rgb(138, 138, 138)" }}
            />
            <div>Figma</div>
          </div>
          <div style={{ width: "10%" }}>
            <i
              className="fab fa-invision"
              style={{ fontSize: "3em", color: "#ff3366" }}
            />
            <div>Invision</div>
          </div>
        </div>
      </div>
    );
  }
}
