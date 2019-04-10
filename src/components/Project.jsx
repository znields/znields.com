import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-grid-system';
import SmallLink from './SmallLink';
import Chip from './Chip';

const style = {
  icon: {
    height: '30pt',
  },
  title: {
    fontWeight: 'bold',
    height: '50pt',
    fontSize: '15pt',
    display: 'inline-block',
    paddingTop: '13pt',
    marginLeft: 10,
  },
  description: {
    marginLeft: '15pt',
  },
};

function Project(props) {
  const {
    icon, title, children, stack, href,
  } = props;

  return (
    <Container fluid style={{ align: 'left', width: '100%', marginBottom: '20px' }}>
      <Row style={{ height: '40pt' }}>
        <Col xl={0.9} lg={0.8} md={0.9} sm={1.1} xs={1.3} style={{ lineHeight: '60pt' }}>
          <img src={icon} style={style.icon} alt="icon" />
        </Col>
        <Col>
          <span style={style.title}>
            <SmallLink href={href}>{title}</SmallLink>
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
      <Row>
        {stack.map(e => <Chip>{e}</Chip>)}
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
};

export default Project;
