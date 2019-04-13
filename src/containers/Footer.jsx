import React from 'react';
import Watermark from '../components/Watermark';
import Social from '../components/Social';
import { Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Social sites={['https://www.linkedin.com/in/isaiahnields/', 'https://twitter.com/isaiahnields', 'https://github.com/isaiahnields', 'https://medium.com/@isaiahnields', 'https://www.facebook.com/isaiahnields', 'mailto:imnields@gmail.com']} />
          </Col>
          <Col>
            <Watermark text="❤️" />
          </Col>
        </Row>

      </div>
    );
  }
}

export default Footer;
