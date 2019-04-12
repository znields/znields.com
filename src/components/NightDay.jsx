import React from 'react';
import { Keyframes } from 'react-spring/renderprops';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Emoji from './Emoji';


const Containers = {
  center: Keyframes.Spring({
    show: { opacity: 1, transform: 'rotate(0deg)' },
    spin: async (next) => {
      while (true) {
        await next({ transform: 'rotate(0deg)', config: { easing: t => t, duration: 0 } });
        await next({ transform: 'rotate(360deg)', config: { easing: t => t, duration: 10000 } });
      }
    },
  }),
  earth: Keyframes.Spring({
    show: { opacity: 1 },
    spin: async (next) => {
      while (true) {
        await next({ transform: 'rotate(0deg)', config: { easing: t => t, duration: 0 } });
        await next({ transform: 'rotate(13140deg)', config: { easing: t => t, duration: 10000 } });
      }
    },
  }),
  comet: Keyframes.Spring({
    show: { opacity: 1 },
    spin: async (next) => {
      await next({ transform: 'rotate(180deg)', config: { easing: t => t, duration: 0 } });
    },
  }),
};

class NightDay extends React.Component {
    onClick = () => {
      const { dayStore } = this.props;
      dayStore.day = !dayStore.day;
    };

    render() {
      const { dayStore } = this.props;
      const { day } = dayStore;
      return (
        <div style={{ top: '5.0vh', right: '7.0vw', position: 'absolute' }}>
          <Emoji
            className="l"
            style={{
              fontSize: null, zIndex: 50, userSelect: 'none', position: 'relative',
            }}
            symbol={day ? '☀️' : '🌑'}
            onClick={this.onClick}
          />
          <Containers.center state="spin">
            { centerStyle => (
              <span style={{
                ...centerStyle, paddingLeft: '5.0vh', marginLeft: -30, zIndex: 0, marginTop: 20, position: 'absolute', transformOrigin: 'left',
              }}
              >
                { day ? (
                  <Containers.earth state="spin">
                    { earthStyle => (
                      <span>
                        <Emoji
                          className="xs"
                          style={{
                            ...earthStyle, fontSize: null,
                          }}
                          symbol="🌎"
                        />
                      </span>
                    )}
                  </Containers.earth>
                )
                  : (
                    <Emoji
                      class="xs"
                      style={{ transform: 'rotate(180deg)', pointerEvents: 'none' }}
                      symbol="🚀️"
                    />

                  )}
              </span>
            ) }
          </Containers.center>
        </div>
      );
    }
}

NightDay.propTypes = {
  dayStore: PropTypes.objectOf(Boolean).isRequired,
};

export default observer(NightDay);
