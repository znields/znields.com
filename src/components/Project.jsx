import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import SmallLink from './SmallLink';
import Chip from './Chip';

const style = {
  container: {
    paddingBottom: '40px',
  },
  icon: {
    width: '25pt',
    marginLeft: '12.5pt',
    boxShadow: '0pt 0pt 1pt 0px',
    borderRadius: '25pt',
  },
  award: {
    fontWeight: 'bold',
    fontSize: '11pt',
    marginLeft: '5px',
  },
  chips: {
    marginLeft: '0px',
  },
  children: {
    marginLeft: '5px',
  },
};

function Project(props) {
  const {
    icon, title, children, stack, href, award,
  } = props;

  return (
    <Container style={style.container}>
      <Row>
        <Col lg={0.1}>
          <img src={icon} style={style.icon} alt="icon" />
        </Col>
        <Col>
          <span style={style.title}>
            <SmallLink href={href}>{title}</SmallLink>
          </span>
        </Col>
      </Row>
      <Row>
        <Col style={style.children}>
          {children}
        </Col>
      </Row>
      <Row>
        <Col style={style.award}>
          {award}
        </Col>
      </Row>
      <Row style={style.chips}>
        {stack.map(e => <Chip key={e}>{e}</Chip>)}
      </Row>
    </Container>
  );
}

Project.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(String).isRequired,
  href: PropTypes.string.isRequired,
  award: PropTypes.element,
};

Project.defaultProps = {
  award: null,
};

export default Project;
