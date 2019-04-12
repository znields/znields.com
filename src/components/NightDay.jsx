import React from 'react';
import { Keyframes } from 'react-spring/renderprops';
import { observer } from 'mobx-react';
import dayStore from '../store/day';


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
      console.log('DONT');
    };

    render() {
      const { day } = dayStore;
      return (
        <div style={{
          position: 'absolute', top: '2.5vh', right: '15vw', verticalAlign: 'middle', display: 'table-cell', textAlign: 'center',
        }}
        >
          <div style={{ width: '10vw', height: '20vh', position: 'relative' }}>
            <div
              className="xl"
              onClick={this.onClick}
              style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 50,
              }}
            >
              {day ? '🌎' : '🌌'}
            </div>
          </div>
          <Containers.center state="spin">
            { centerStyle => (
              <div style={{
                ...centerStyle,
                zIndex: 0,
                width: '10vw',
                height: '20vh',
                position: 'absolute',
                top: '3vh',
                right: '3vw',
              }}
              >
                { day ? (

                  <div
                    style={{ transform: 'rotate(60deg)', pointerEvents: 'none', position: 'absolute' }}
                    className="s"
                  >
                    {'🚀'}
                  </div>
                )
                  : (
                    <div
                      className="m"
                      style={{ transform: 'rotate(200deg)', pointerEvents: 'none', position: 'absolute' }}
                    >
                      {'🌠️'}
                    </div>

                  )}
              </div>
            ) }
          </Containers.center>
        </div>
      );
    }
}

export default observer(NightDay);
