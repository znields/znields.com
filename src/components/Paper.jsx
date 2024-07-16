import { Card } from "react-bootstrap";
import React from "react";
import Emoji from "./Emoji";
import calendar from "../assets/calendar.png";
import link_ from "../assets/link.png";

const style = {
  link: {
    textDecoration: "none",
    float: "right",
  },
  title: {
    fontSize: "13pt",
    display: "flex",
    height: "30pt",
  },
  date: {
    float: "left",
    fontFamily: "Inconsolata,monospace",
  },
  card: {
    marginBottom: "25px",
    backgroundColor: "inherit",
    border: "1px solid black",
  },
  image: {
    maxHeight: "480px",
    maxWidth: "270px",
    backgroundColor: "white",
  },
  imageContainer: {
    height: 220,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

function Paper(props) {
  const { date, title, img, link } = props;

  return (
    <Card style={style.card}>
      <div style={style.imageContainer}>
        <Card.Img variant="top" src={img} style={style.image} />
      </div>
      <Card.Body>
        <Card.Title style={style.title}>
          <span style={{ alignSelf: "flex-end" }}>{title}</span>
        </Card.Title>
        <span style={style.date}>
          <Emoji
            src={calendar}
            style={{ width: "15pt", height: "15pt", marginBottom: "5px" }}
          />
          &nbsp;
          {date}
        </span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={style.link}
        >
          <Emoji
            src={link_}
            style={{ width: "15pt", height: "15pt", marginBottom: "5px" }}
          />
          &nbsp;
        </a>
      </Card.Body>
    </Card>
  );
}

export default Paper;
