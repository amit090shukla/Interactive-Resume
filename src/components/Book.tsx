import * as React from "react";
import styled from "styled-components";
import { API_KEY } from "../config";
export interface BookProps {
  isbn: String;
}

const BookContainer = styled.div`
  padding: 20px 10px
  margin: 20px 20px 20px 0
  border: 1px solid #e4e4e4
  border-radius: 3px
  width: 100%;
  display: flex
`;

export default class Book extends React.Component<BookProps, any> {
  state = {
    bookname: "",
    imgUrl: "",
    description: ""
  };
  componentDidMount() {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&q=isbn:${
        this.props.isbn
      }`
    )
      .then(data => data.json())
      .then(data => {
        const { items } = data;
        if (
          items &&
          items.length &&
          items[0].volumeInfo &&
          items[0].volumeInfo.title
        ) {
          const bookname = items[0].volumeInfo.title;
          let description = items[0].volumeInfo.description
            ? items[0].volumeInfo.description
            : "";
          if (description.split(" ").length > 120) {
            description = description
              .split(" ")
              .slice(1, 120)
              .join(" ");
          }
          const imgUrl =
            items[0].volumeInfo.imageLinks &&
            items[0].volumeInfo.imageLinks.thumbnail
              ? items[0].volumeInfo.imageLinks.thumbnail
              : "https://via.placeholder.com/150";
          this.setState({ bookname, description, imgUrl });
        }
      });
  }
  public render() {
    const { bookname, imgUrl, description } = this.state;
    return (
      <BookContainer>
        <div style={{ marginRight: "15px" }}>
          <img src={imgUrl} alt="Book cover" />
        </div>
        <div>
          <h4>{bookname}</h4>
          <p>{description}</p>
        </div>
      </BookContainer>
    );
  }
}
