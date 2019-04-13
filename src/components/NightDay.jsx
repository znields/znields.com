import React from 'react';
import { Keyframes } from 'react-spring/renderprops';
import { observer } from 'mobx-react';
import dayStore from '../store/day';
import Emoji from './Emoji';

import earth from '../assets/earth.png';
import galaxy from '../assets/galaxy.png';
import rocket from '../assets/rocket.png';
import star from '../assets/star.png';


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
        await next({ transform: 'rotate(5000deg)', config: { easing: t => t, duration: 10000 } });
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
      dayStore.day = !dayStore.day;
    };

    render() {
      const { day } = dayStore;
      return (
        <div style={{
          position: 'absolute', top: '2.5vh', right: '15vw', verticalAlign: 'middle', display: 'table-cell', textAlign: 'center',
        }}
        >
          <div style={{ width: '10vw', height: '20vh', position: 'relative' }}>
            <Emoji
              className="xl"
              src={day ? earth : galaxy}
              style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 50,
              }}
              onClick={this.onClick}
            />
          </div>
          <Containers.center state="spin">
            { centerStyle => (
              <div style={{
                ...centerStyle,
                zIndex: 0,
                width: '10vw',
                height: '20vh',
                position: 'absolute',
                top: '1vh',
                right: '1vw',
              }}
              >
                <Emoji
                  src={day ? rocket : star}
                  className={day ? 's' : 'm'}
                  style={{ transform: `rotate(${day ? 60 : 250}deg)`, pointerEvents: 'none', position: 'absolute' }}
                />
              </div>
            )}
          </Containers.center>
        </div>
      );
    }
}

export default observer(NightDay);
