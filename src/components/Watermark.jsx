import React from 'react';
import { Keyframes } from 'react-spring/renderprops-universal';
import Emoji from './Emoji';

const style = {
  fontSize: '12pt',
  marginRight: '10vw',
  float: 'right',
};

const Container = Keyframes.Spring({
  show: { opacity: 1 },
  beat: async (next) => {
    await next({transform: 'scale(1.0)', config: {duration: 0}});
    await next({transform: 'scale(1.2)', config: {duration: 900}});
    await next({transform: 'scale(1.0)', config: {duration: 900}});
    await next({transform: 'scale(1.2)', config: {duration: 900}});
    await next({transform: 'scale(1.0)', config: {duration: 900}});
  },
});

function Watermark(props) {
  const { text } = props;

  return (
    <div>
      <Container state="show">
        { animationStyle => (
          <Emoji
            style={{ ...animationStyle, ...style, transform: 'scale(1.0)' }}
            symbol={text}
          />
        )}
      </Container>
    </div>

  );
}

export default Watermark;
