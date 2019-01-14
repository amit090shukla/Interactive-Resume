import * as React from "react";
import { FaBehanceSquare, FaMedium, FaYoutube } from "react-icons/fa";
import styled from "styled-components";
import Book from "./Book";
import { BOOKS } from "../common/helper";
export interface PortfolioProps {}
// Styled Components
const PortfolioContainer = styled.div`
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
`;
//---------------------------------------------------------
export default class Portfolio extends React.Component<PortfolioProps, any> {
  public render() {
    return (
      <div>
        <h1>My Portfolio </h1>
        <div className="d-f s-b">
          <PortfolioContainer>
            <FaBehanceSquare
              color="#1769ff"
              size="2em"
              style={{ alignSelf: "center" }}
            />
            <SpanStyle>Behance Portfolio</SpanStyle>
          </PortfolioContainer>
          <PortfolioContainer>
            <FaMedium
              color="#222221"
              size="2em"
              style={{ alignSelf: "center" }}
            />
            <SpanStyle>My Medium Articles </SpanStyle>
          </PortfolioContainer>
          <PortfolioContainer>
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
