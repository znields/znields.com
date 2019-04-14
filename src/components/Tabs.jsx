import React from 'react';
import {
  Tab, Row, Col, Nav,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import dayStore from '../store/day';
import Emoji from './Emoji';

import calendar from '../assets/calendar.png';
import pushpin from '../assets/pushpin.png';

const style = {
  date: {
    fontFamily: 'Inconsolata,monospace',
    fontSie: '10pt',
    whiteSpace: 'nowrap',
  },
  location: {
    // fontWeight: 'bold',
    fontSie: '10pt',
    whiteSpace: 'nowrap',
  },
  company: {
    fontWeight: 'bold',
    borderRadius: '0',
  },
};

class ControlledTabs extends React.Component {
  constructor(props) {
    super(props);

    const { jobs } = this.props;

    this.state = {
      key: jobs[0].company,
    };
  }

  render() {
    const { jobs } = this.props;
    const { key } = this.state;
    const { day } = dayStore;
    const color = day ? 'black' : 'white';
    const backgroundColor = day ? 'lightgrey' : 'rgb(0, 123, 255)';

    return (
      <Tab.Container defaultActiveKey={key}>
        <Row>
          <Col sm={3} style={{ marginRight: '10px', marginBottom: '10px', paddingLeft: '10px' }}>
            <Nav className="flex-column">
              { jobs.map(job => (
                <Nav.Item key={job.company} onClick={() => { this.setState({ key: job.company }); }}>
                  <Nav.Link
                    eventKey={job.company}
                    style={{
                      ...style.company, backgroundColor: key === job.company ? backgroundColor : 'inherit', borderRadius: '20px', color,
                    }}
                  >
                    {job.company}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={7} style={{ marginTop: '10px' }}>
            <Tab.Content>
              { jobs.map(job => (
                <Tab.Pane key={job.company} eventKey={job.company}>
                  <Row>
                    <Col style={style.location}>
                      <Emoji src={pushpin} style={{ width: '15pt', height: '15pt', marginBottom: '5px' }} />
                      &nbsp;
                      {job.location}
                    </Col>
                    <Col md={7} style={style.date}>
                      <Emoji src={calendar} style={{ width: '15pt', height: '15pt', marginBottom: '5px' }} />
                      &nbsp;
                      {job.date}
                    </Col>
                  </Row>
                  <ul>
                    {job.items.map(item => <li key={item} style={{ fontSize: '12pt' }}>{item}</li>)}
                  </ul>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

ControlledTabs.propTypes = {
  jobs: PropTypes.arrayOf(Object).isRequired,
};

export default observer(ControlledTabs);
