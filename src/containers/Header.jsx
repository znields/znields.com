import React, { Component } from 'react';
import { Keyframes, config, Spring } from 'react-spring/renderprops';
import { observer } from 'mobx-react';
import dayStore from '../store/day';
import Emoji from '../components/Emoji';
import NightDay from '../components/NightDay';

import wave from '../assets/wave.png';
import point from '../assets/point.png';
import data from '../assets/data.png';

const style = {
  container: {
    height: '100vh',
    marginBottom: '100px',
  },
  greeting: {
    position: 'absolute',
    left: '10vw',
    top: '15vh',
    letterSpacing: 1,
    lineHeight: 1,
  },
  introduction: {
    position: 'absolute',
    left: '10vw',
    top: '40vh',
    maxWidth: 700,
    letterSpacing: 1,
    lineHeight: 1.9,
    marginRight: '30vw',
  },
  contact: {
    position: 'absolute',
    left: '10vw',
    top: '85vh',
  },
  email: {
    textDecoration: 'none',
  },
};

const Containers = {
  wave: Keyframes.Spring({
    show: { opacity: 1, paddingLeft: 0, paddingTop: 0 },
    wave: async (next, cancel, ownProps) => {
      await next({ transform: 'rotate(0deg)', paddingTop: 0, paddingLeft: 0 });
      // wave 1
      await next({
        transform: 'rotate(-10deg)', marginLeft: 0, marginTop: 15, config: { ...config.gentle, duration: 150 },
      });
      await next({
        transform: 'rotate(0deg)', marginLeft: 19, marginTop: 0, config: { ...config.gentle, duration: 150 },
      });
      // wave 2
      await next({
        transform: 'rotate(-10deg)', marginLeft: 0, marginTop: 15, config: { ...config.gentle, duration: 200 },
      });
      await next({
        transform: 'rotate(0deg)', marginLeft: 16, marginTop: 0, config: { ...config.gentle, duration: 200 },
      });
      // wave 3
      await next({
        transform: 'rotate(-10deg)', marginLeft: 0, marginTop: 15, config: { ...config.gentle, duration: 200 },
      });
      await next({
        transform: 'rotate(0deg)', marginLeft: 16, marginTop: 0, config: { ...config.gentle, duration: 200 },
      });
      // wave 4
      await next({
        transform: 'rotate(-2deg)', marginLeft: 13, marginTop: 2, config: { ...config.gentle, duration: 150 },
      });
      await next({
        transform: 'rotate(0deg)', marginLeft: 0, marginTop: 0, config: { ...config.gentle, duration: 200 },
      });
      ownProps.onRest();
    },
  }),
  poke: Keyframes.Spring({
    show: { opacity: 1 },
    poke: async (next, cancel, ownProps) => {
      await next({ marginLeft: 0, config: { easing: t => t, duration: 100 } });
      await next({ marginLeft: 10, config: { easing: t => t, duration: 100 } });
      await next({ marginLeft: 0, config: { easing: t => t, duration: 100 } });
      ownProps.onRest();
    },
  }),
};

class Header extends Component {
    state = {
      animateWave: true,
      animatePoke: false,
      linkHovered: false,
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

    onHoverLink = () => {
      const newState = { ...this.state, linkHovered: true };
      this.setState(newState);
    };

    onCancelHoverLink = () => {
      const newState = { ...this.state, linkHovered: false };
      this.setState(newState);
    };

    render() {
      const { animateWave, animatePoke, linkHovered } = this.state;
      const { day } = dayStore;
      let emailColor;

      if (day && linkHovered) {
        emailColor = 'white';
      } else if (!day && linkHovered) {
        emailColor = 'white';
      } else if (day && !linkHovered) {
        emailColor = 'black';
      } else {
        emailColor = 'white';
      }

      return (
        <div style={style.container}>
          <NightDay />

          {/* Greeting */}
          <div style={style.greeting} className="xl">
            Hello!&nbsp;
            <Containers.wave
              state={animateWave ? 'wave' : 'show'}
              onRest={this.onEndWave}
            >
              {waveStyle => (
                <Emoji
                  onClick={this.onClickWave}
                  src={wave}
                  style={{ ...waveStyle, transformOrigin: 'center', position: 'absolute' }}
                  className="xl"
                />
              )}
            </Containers.wave>
          </div>

          {/* Introduction */}
          <div style={style.introduction} className="l">
            {"I'm "}
            <b>Isaiah Nields</b>
            , a software engineer with skills in machine learning.
            {" I "}
            build products that harness the power of data&nbsp;
            <Emoji
              src={data}
              className="l"
              style={{ marginBottom: '5px' }}
            />
          </div>

          {/* Contact */}
          <div style={style.contact} className="m">
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
                  src={point}
                  className="m"
                  label="point-right"
                />
              ) }
            </Containers.poke>
            &nbsp;
            <Spring
              to={{
                boxShadow: `inset 0 ${linkHovered ? '-40px' : '-3px'} 0 #007bff`,
                color: emailColor,
              }}
            >
              { emailStyle => (
                <a
                  onMouseOver={this.onHoverLink}
                  onMouseOut={this.onCancelHoverLink}
                  style={{ ...emailStyle, ...style.email }}
                  href="mailto:imnields@gmail.com"
                >
                imnields@gmail.com
                </a>
              ) }
            </Spring>
          </div>

        </div>
      );
    }
}

export default observer(Header);
