import React from 'react';
import { Keyframes } from 'react-spring/renderprops';
import Emoji from './Emoji';

import heart from '../assets/heart.png';

const style = {
  height: '12pt',
  width: '12pt',
  marginRight: '10vw',
  float: 'right',
};

const Container = Keyframes.Spring({
  show: { opacity: 1, transform: 'scale(1.0)' },
  beat: async (next) => {
    while (true) {
      await next({transform: 'scale(1.2)', config: { duration: 1000 }});
      await next({transform: 'scale(1.0)', config: { duration: 1000 }});
    }
  },
});

function Watermark(props) {

  return (
    <div>
      <Container state="beat" style={{ verticalAlign: 'middle' }}>
        { animationStyle => (
          <Emoji style={{ ...animationStyle, ...style }} src={heart} />
        )}
      </Container>
    </div>

  );
}

export default Watermark;
