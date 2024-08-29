import React from "react";
import Watermark from "../components/Watermark";
import Social from "../components/Social";
import { Row, Col } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Social
              sites={[
                "https://www.linkedin.com/in/znields/",
                "https://twitter.com/zaynields",
                "https://www.instagram.com/zaynields",
                "https://github.com/znields",
                "https://znields.medium.com",
              ]}
            />
          </Col>
          <Col>
            <Watermark />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
