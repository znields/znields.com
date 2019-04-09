import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-grid-system';

const style = {
  container: {
    margin: 0,
    paddingBottom: 40,
    paddingLeft: '5vw',
  },
  title: {
    color: '#007bff',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: '16pt',
    paddingBottom: 20,
  },
  content: {
    fontSize: '13pt',
    lineHeight: '22pt',
    paddingLeft: '5.5vw',
  },
};

function Section(props) {
  const { children, title } = props;
  return (
    <Container style={style.container}>
      <Row>
        <Col lg={2} md={3} style={style.title}>
          {title}
        </Col>
        <Col lg={8} md={9} style={style.content}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

Section.propTyps = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
