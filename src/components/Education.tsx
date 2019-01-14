import * as React from "react";
import {
  CERTIFICATES,
  PROGRAMMING_SKILLS,
  DESIGNING_SKILLS
} from "../common/helper";
import styled from "styled-components";
import Certification from "./Certificates";

// Styled Components
const EducationContainer = styled.div`
  padding: 20px 10px
  margin: 20px 20px 20px 0
  border: 1px solid #e4e4e4
  border-radius: 3px
  width: 45%;
`;
//---------------------------------------------------------

export default class Education extends React.Component<{}, any> {
  public render() {
    return (
      <div>
        <h1>My Educational Background 👨‍🎓 </h1>
        <div className="d-f s-b">
          <EducationContainer>
            <h3>B.Tech in Computer Science & Engineering</h3>
            <span>LNMIIT Jaipur</span>
            <br />
            <span>2014-2018</span>
          </EducationContainer>
          <EducationContainer>
            <h3>UX Certifications 📑</h3>
            <div>
              {CERTIFICATES.map((certi, index) => (
                <Certification key={index} {...certi} />
              ))}
            </div>
          </EducationContainer>
        </div>
        <h2>Programming Skills 💪</h2>
        <div className="d-f">
          {PROGRAMMING_SKILLS.map((skill, index) => (
            <div key={index} style={{ width: "10%" }}>
              {skill.icon}
              <div>{skill.name}</div>
            </div>
          ))}
        </div>
        <h2>Designing Skills pen 🖋</h2>
        <div className="d-f">
          {DESIGNING_SKILLS.map((skill, index) => (
            <div key={index} style={{ width: "10%" }}>
              {skill.icon}
              <div>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
