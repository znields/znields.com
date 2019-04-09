import React from 'react';
import { Keyframes } from 'react-spring/renderprops';
import Emoji from '../components/Emoji';


const Containers = {
  center: Keyframes.Spring({
    show: { opacity: 1 },
    spin: async (next) => {
      await next({ transform: 'rotate(0deg)', config: { easing: t => t, duration: 0 } });
      await next({ transform: 'rotate(1080000deg)', config: { easing: t => t, duration: 50000000 } });
    },
  }),
  earth: Keyframes.Spring({
    show: { opacity: 1 },
    spin: async (next) => {
      await next({ transform: 'rotate(0deg)', config: { easing: t => t, duration: 0 } });
      await next({ transform: 'rotate(39420000deg)', config: { easing: t => t, duration: 50000000 } });
    },
  }),
  comet: Keyframes.Spring({
    show: { opacity: 1 },
    spin: async (next) => {
      await next({ transform: 'rotate(180deg)', config: { easing: t => t, duration: 0 } });
      await next({ transform: 'rotate(3180deg)', config: { easing: t => t, duration: 50000000 } });
    },
  }),
};

class NightDay extends React.Component {
    state = {
      day: true,
    };

    onClick = () => {
      const {day} = this.state;
      document.body.style.backgroundColor = !day ? 'white' : '#171c28';
      document.body.style.color = !day ? 'black' : 'white';

      console.log(document.getElementsByTagName('a'))


      for (const a of document.getElementsByTagName('a')) {
        a.style.color = !day ? 'black' : 'white';
        if (a.innerText !== 'imnields@gmail.com') a.style.boxShadow = !day ?  null: 'inset 0 -1.5px 0 0 white';

        const newState = { ...this.state, day: !day };
        this.setState(newState);
      }
    };

    render() {
      const { day } = this.state;

      return (
        <div style={{ top: '5.0vh', right: '7.0vw', position: 'absolute' }}>
          <Emoji className="l" style={{ fontSize: null, zIndex: -1, userSelect: 'none' }} symbol={day ? '☀️' : '🌑'} onClick={this.onClick} />
          <Containers.center state="spin">
            { centerStyle => (
              <span style={{
                ...centerStyle, paddingLeft: '5.0vh', marginLeft: -30, marginTop: 20, position: 'absolute', zIndex: -1, transformOrigin: 'left',
              }}
              >
                { day ? (
                  <Containers.earth state="spin">
                    { earthStyle => (
                      <Emoji
                        className="xs"
                        style={{
                          ...earthStyle, fontSize: null, lineHeight: 0, lineWidth: 0,
                        }}
                        symbol="🌎"
                      />
                    )}
                  </Containers.earth>
                )
                  : (
                    <Containers.comet state="spin">
                      { rocketStyle => (
                        <Emoji
                          style={{ ...rocketStyle, fontSize: 19 }}
                          symbol="🚀️"
                        />
                      )}
                    </Containers.comet>
                  )}
              </span>
            ) }
          </Containers.center>
        </div>
      );
    }
}

export default NightDay;
