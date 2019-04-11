import { Card } from 'react-bootstrap';
import React from 'react';

const style = {
  link: {
    textDecoration: 'none',
    float: 'right',
  },
  title: {
    fontSize: '13pt',
    display: 'flex',
    height: '30pt',
  },
  date: {
    float: 'left',
    fontFamily: 'Inconsolata,monospace',
  },
  card: {
    marginBottom: '25px',
    backgroundColor: 'inherit',
    border: '1px solid black',
  },
  image: {
    maxHeight: '480px',
    maxWidth: '270px',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingTop: '10px',
  },
};

function Paper(props) {
  const {
    date, title, img, link,
  } = props;

  return (
    <Card style={style.card}>
      <Card.Img variant="top" src={img} style={style.image} />
      <Card.Body>
        <Card.Title style={style.title}><span style={{ alignSelf: 'flex-end' }}>{title}</span></Card.Title>
        <span style={style.date}>
          {'📅 '}
          {date}
        </span>
        <a href={link} target="_blank" rel="noopener noreferrer" style={style.link}>
          {'🔗'}
        </a>
      </Card.Body>
    </Card>
  );
}

export default Paper;
