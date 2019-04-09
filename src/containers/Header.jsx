import React, { Component } from 'react';
import { Row, Col, Container } from 'react-grid-system';
import { Keyframes, config } from 'react-spring/renderprops';
import Emoji from '../components/Emoji';


const style = {
  container: {
    margin: '10vh 10vw 0 10vw',
    padding: '0 0',
    height: '90vh',
    width: '75vw',
    maxWidth: 800,
    pointerEvents: 'none',
  },
  greeting: {
    height: '20vh',
    paddingTop: '10vh',
    maxWidth: 20,
    letterSpacing: 1,
    pointerEvents: 'none',
  },
  introduction: {
    paddingTop: '5vh',
    height: '35vh',
    lineHeight: 2.0,
    verticalAlign: 'middle',
    letterSpacing: 1,
  },
  contact: {
    height: '30vh',
    paddingTop: '15vh',
    pointerEvents: 'auto',
  },
};

const Containers = {
  wave: Keyframes.Spring({
    show: { opacity: 1, paddingLeft: 0, paddingTop: 0 },
    wave: async (next, cancel, ownProps) => {
      await next({ transform: 'rotate(0deg)', paddingTop: 0, paddingLeft: 0 });
      // wave 1
      await next({ transform: 'rotate(-10deg)', paddingLeft: 0, paddingTop: 15, config: { ...config.gentle, duration: 150 } });
      await next({ transform: 'rotate(0deg)', paddingLeft: 19, paddingTop: 0, config: { ...config.gentle, duration: 150 } });
      // wave 2
      await next({ transform: 'rotate(-10deg)', paddingLeft: 0, paddingTop: 15, config: { ...config.gentle, duration: 200 } });
      await next({ transform: 'rotate(0deg)', paddingLeft: 16, paddingTop: 0, config: { ...config.gentle, duration: 200 } });
      // wave 3
      await next({ transform: 'rotate(-10deg)', paddingLeft: 0, paddingTop: 15, config: { ...config.gentle, duration: 200 } });
      await next({ transform: 'rotate(0deg)', paddingLeft: 16, paddingTop: 0, config: { ...config.gentle, duration: 200 } });
      // wave 4
      await next({ transform: 'rotate(-2deg)', paddingLeft: 13, paddingTop: 2, config: { ...config.gentle, duration: 150 } });
      await next({ transform: 'rotate(0deg)', paddingLeft: 0, paddingTop: 0, config: { ...config.gentle, duration: 200 } });
      ownProps.onRest();
    },
  }),
  poke: Keyframes.Spring({
    show: { opacity: 1 },
    poke: async (next, cancel, ownProps) => {
      await next({ paddingLeft: 0, paddingRight: 0, config: { easing: t => t, duration: 100 } });
      await next({ paddingLeft: 10, paddingRight: 0, config: { easing: t => t, duration: 100 } });
      await next({ paddingLeft: 0, paddingRight: 0, config: { easing: t => t, duration: 100 } });
      ownProps.onRest();
    },
  }),
  link: Keyframes.Spring({
    show: { opacity: 1 },
    poke: async (next, cancel, ownProps) => {
      await next({ paddingLeft: 0, paddingRight: 0, config: { easing: t => t, duration: 100 } });
      await next({ paddingLeft: 10, paddingRight: 0, config: { easing: t => t, duration: 100 } });
      await next({ paddingLeft: 0, paddingRight: 0, config: { easing: t => t, duration: 100 } });
      ownProps.onRest();
    },
  }),
};

class Header extends Component {
    state = {
      animateWave: true,
      animatePoke: false,
    };

    onClickWave = () => {
      const newState = { ...this.state, animateWave: true };
      this.setState(newState);
    };

    onEndWave = () => {
      const newState = { ...this.state, animateWave: false };
      this.setState(newState);
    };

    onClickPoke = () => {
      const newState = { ...this.state, animatePoke: true };
      this.setState(newState);
    };

    onEndPoke = () => {
      const newState = { ...this.state, animatePoke: false };
      this.setState(newState);
    };

    render() {
      const { animateWave, animatePoke } = this.state;

      return (
        <Container fluid style={style.container}>

          {/* Greeting */}
          <Row>
            <Col style={style.greeting} className="xl">
              Hello!&nbsp;
              <Containers.wave
                state={animateWave ? 'wave' : 'show'}
                onRest={this.onEndWave}
              >
                {waveStyle => (
                  <span>
                    <Emoji
                      onClick={this.onClickWave}
                      symbol="👋"
                      style={{ ...waveStyle, transformOrigin: 'center', position: 'absolute' }}
                      label="wave"
                    />
                  </span>
                )}
              </Containers.wave>
            </Col>
          </Row>

          {/* Introduction */}
          <Row>
            <Col style={style.introduction} className="l">
              {"I'm "}
              <b>Isaiah Nields</b>
              , a CS student with expertise in machine learning.
              {" I'll "}
              be a SWE Intern at Facebook for Summer 2019 👨‍💻
            </Col>
          </Row>

          {/* Contact */}
          <Row>
            <Col style={style.contact} className="m">
              Get in touch
              &nbsp;
              <Containers.poke
                state={animatePoke ? 'poke' : 'show'}
                onRest={this.onEndPoke}
              >
                { pokeStyle => (
                  <Emoji
                    onClick={this.onClickPoke}
                    style={pokeStyle}
                    symbol=" 👉 "
                    label="point-right"
                  />
                ) }
              </Containers.poke>
              &nbsp;
              <a
                className="m"
                style={style.link}
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:imnields@gmail.com"
              >
                imnields@gmail.com
              </a>
            </Col>
          </Row>

        </Container>
      );
    }
}

export default Header;
