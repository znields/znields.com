import React, { Component } from 'react';
import { Keyframes, config } from 'react-spring/renderprops';
import Emoji from '../components/Emoji';
import NightDay from '../components/NightDay';


const style = {
  container: {
    height: '100vh',
    minHeight: '500px',
    marginBottom: '100px',
  },
  greeting: {
    position: 'relative',
    left: '10vw',
    top: '15vh',
    letterSpacing: 1,
  },
  introduction: {
    position: 'relative',
    left: '10vw',
    top: '35vh',
    maxWidth: 700,
    letterSpacing: 1,
    lineHeight: 1.9,
    marginRight: '30vw',
  },
  contact: {
    position: 'relative',
    left: '10vw',
    top: '55vh',
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
            <a
              className="m"
              style={style.link}
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:imnields@gmail.com"
            >
              imnields@gmail.com
            </a>
          </div>

        </div>
      );
    }
}

export default Header;
