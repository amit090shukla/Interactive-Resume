import * as React from "react";
import {
  FaGitSquare,
  FaLinkedin,
  FaBehanceSquare,
  FaMedium,
  FaYoutubeSquare
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
export interface ContactProps {
  color: any;
}

const contactContainerStyle = {
  padding: "20px 10px",
  margin: "20px 20px 20px 0",
  border: "1px solid #e4e4e4",
  display: "flex",
  borderRadius: "3px"
};
const textStyle = {
  alignSelf: "center",
  fontSize: "1.1em",
  color: "#4c4c4c",
  marginLeft: "10px"
};
export default class Contact extends React.Component<ContactProps, any> {
  public render() {
    return (
      <div>
        <h1>You can reach me in following ways 😎</h1>
        📧
        <span>
          <b>Email</b>
        </span>
        : <span>amit090shukla@gmail.com</span>
        <br />
        📞
        <span>
          <b>Phone</b>
        </span>
        : <span>XXX-XXX-XXXX</span>
        <div className="d-f" style={{ justifyContent: "space-between" }}>
          <div style={{ width: "30%" }}>
            <div style={contactContainerStyle}>
              <FaGitSquare size="3em" color="#333" />
              <div style={textStyle}>Github</div>
            </div>
            <div style={contactContainerStyle}>
              <FaLinkedin size="3em" color="#0077b5" />
              <div style={textStyle}>LinkedIn</div>
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <div style={contactContainerStyle}>
              <FaBehanceSquare size="3em" color="#1769ff" />
              <div style={textStyle}>Behance</div>
            </div>

            <div style={contactContainerStyle}>
              <FaMedium size="3em" color="#222221" />
              <div style={textStyle}>Medium</div>
            </div>
          </div>
          <div style={{ width: "30%" }}>
            <div style={contactContainerStyle}>
              <FaYoutubeSquare size="3em" color="#ff0000" />
              <div style={textStyle}>YouTube</div>
            </div>
            <div style={contactContainerStyle}>
              <MdMail size="3em" color={this.props.color} />
              <div style={textStyle}>Mail</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
