import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';

const style = {
  container: {
    paddingBottom: '70px',
  },
  title: {
    color: '#007bff',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: '16pt',
    marginBottom: '20px',
  },
  content: {
    lineHeight: '25pt',
    fontSize: '13pt',
  },
};

function Section(props) {
  const { children, title } = props;
  return (
    <Container style={style.container}>
      <Row>
        <Col lg={2} style={style.title}>
          {title}
        </Col>
        <Col lg={10} style={style.content}>
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
