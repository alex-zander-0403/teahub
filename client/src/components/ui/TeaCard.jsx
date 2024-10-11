import React from "react";
import Card from "react-bootstrap/Card";

export default function TeaCard({ tea }) {
  return (
    <>
      <Card
        className="box-with-shadow" // класс для тени
        style={{ width: "20rem" }}
      >
        <Card.Header className="text1">{tea.title}</Card.Header>
        {/* <Card.Title>{tea.title}</Card.Title> */}
        <Card.Body>
          <Card.Img variant="top" src={tea.url} />
          <hr />
          <Card.Text>{tea.desc}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
