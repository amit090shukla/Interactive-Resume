import * as React from "react";
import { FaBehanceSquare, FaMedium, FaYoutube, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import Book from "./Book";
import { BOOKS } from "../common/helper";
import "../styles/global.css";
export interface PortfolioProps {}
// Styled Components
const PortfolioContainer = styled.a`
  padding: 20px 10px
  margin: 20px 20px 20px 0
  border: 1px solid #e4e4e4
  border-radius: 3px
  width: 45%;
  display: flex;
`;

const SpanStyle = styled.span`
  align-self: center;
  margin-left: 10px;
  font-weight: 600;
  color: #000;
`;
//---------------------------------------------------------
export default class Portfolio extends React.Component<PortfolioProps, any> {
  public render() {
    return (
      <div>
        <h1>My Portfolio </h1>
        <div className="d-f s-b">
          <PortfolioContainer
            href="https://www.behance.net/amit090shukla"
            target="_blank"
          >
            <FaBehanceSquare
              color="#1769ff"
              size="2em"
              style={{ alignSelf: "center" }}
            />
            <SpanStyle>Behance Portfolio</SpanStyle>
          </PortfolioContainer>
          <PortfolioContainer
            href="https://github.com/amit090shukla"
            target="_blank"
          >
            <FaGithub color="#333" size="2em" style={{ alignSelf: "center" }} />
            <SpanStyle>GitHub</SpanStyle>
          </PortfolioContainer>
          <PortfolioContainer
            href="https://medium.com/@amitshukla_58857"
            target="_blank"
          >
            <FaMedium
              color="#222221"
              size="2em"
              style={{ alignSelf: "center" }}
            />
            <SpanStyle>My Medium Articles </SpanStyle>
          </PortfolioContainer>
          <PortfolioContainer
            href="https://www.youtube.com/channel/UCXRbMb2-A-H9nx-e2KB2HTw/videos"
            target="_blank"
          >
            <FaYoutube
              color="#ff0000"
              size="2em"
              style={{ alignSelf: "center" }}
            />
            <SpanStyle>YouTube Videos </SpanStyle>
          </PortfolioContainer>
        </div>
        <h3>My Reading List 📕</h3>
        <div className="d-f-c">
          {BOOKS.map(book => (
            <Book isbn={book.isbn} key={book.isbn} />
          ))}
        </div>
      </div>
    );
  }
}
