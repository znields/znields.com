import React from 'react';
import { Keyframes } from 'react-spring/renderprops';

const style = {
  fontSize: '12pt',
  marginRight: '10vw',
  float: 'right',
  transformOrigin: '6pt 5pt',
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
  const { text } = props;

  return (
    <div>
      <Container state="beat" style={{height: '500px', width: '500px'}}>
        { animationStyle => (
          <div style={{...animationStyle, ...style}}>{text}</div>
        )}
      </Container>
    </div>

  );
}

export default Watermark;
