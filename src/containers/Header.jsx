import React, { Component } from 'react';
import { Keyframes, config, Spring } from 'react-spring/renderprops';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Emoji from '../components/Emoji';
import NightDay from '../components/NightDay';

const style = {
  container: {
    height: '100vh',
    // minHeight: '500px',
    marginBottom: '100px',
  },
  greeting: {
    position: 'absolute',
    left: '10vw',
    top: '15vh',
    letterSpacing: 1,
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
        transform: 'rotate(-10deg)', paddingLeft: 0, paddingTop: 15, config: { ...config.gentle, duration: 150 },
      });
      await next({
        transform: 'rotate(0deg)', paddingLeft: 19, paddingTop: 0, config: { ...config.gentle, duration: 150 },
      });
      // wave 2
      await next({
        transform: 'rotate(-10deg)', paddingLeft: 0, paddingTop: 15, config: { ...config.gentle, duration: 200 },
      });
      await next({
        transform: 'rotate(0deg)', paddingLeft: 16, paddingTop: 0, config: { ...config.gentle, duration: 200 },
      });
      // wave 3
      await next({
        transform: 'rotate(-10deg)', paddingLeft: 0, paddingTop: 15, config: { ...config.gentle, duration: 200 },
      });
      await next({
        transform: 'rotate(0deg)', paddingLeft: 16, paddingTop: 0, config: { ...config.gentle, duration: 200 },
      });
      // wave 4
      await next({
        transform: 'rotate(-2deg)', paddingLeft: 13, paddingTop: 2, config: { ...config.gentle, duration: 150 },
      });
      await next({
        transform: 'rotate(0deg)', paddingLeft: 0, paddingTop: 0, config: { ...config.gentle, duration: 200 },
      });
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
      const { dayStore } = this.props;
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
          <NightDay dayStore={dayStore} />

          {/* Greeting */}
          <div style={style.greeting} className="xl">
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
          </div>

          {/* Introduction */}
          <div style={style.introduction} className="l">
            {"I'm "}
            <b>Isaiah Nields</b>
            , a CS student with expertise in machine learning.
            {" I'll "}
            be a SWE Intern at Facebook for Summer 2019 👨‍💻
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
                  symbol=" 👉 "
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

Header.propTypes = {
  dayStore: PropTypes.objectOf(Boolean).isRequired,
};

export default observer(Header);
