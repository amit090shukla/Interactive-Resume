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

export default class Contact extends React.Component<ContactProps, any> {
  public render() {
    return (
      <div>
        <h1>You can reach me in following ways 😎</h1>
        <div>
          <div>
            <FaGitSquare size="3em" color={this.props.color} />
          </div>
          <div>
            <FaLinkedin size="3em" color={this.props.color} />
          </div>
          <div>
            <FaBehanceSquare size="3em" color={this.props.color} />
          </div>
          <div>
            <FaMedium size="3em" color={this.props.color} />
          </div>
          <div>
            <FaYoutubeSquare size="3em" color={this.props.color} />
          </div>
          <div>
            <MdMail size="3em" color={this.props.color} />
          </div>
        </div>
      </div>
    );
  }
}
