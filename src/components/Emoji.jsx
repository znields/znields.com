import React from 'react';
import PropTypes from 'prop-types';


function Emoji(props) {
  const {
    style, onClick, className, src,
  } = props;
  return (
    <img
      alt="emoji"
      src={src}
      style={{
        ...style,
        padding: 0,
        border: 'none',
        background: 'none',
        outline: 'none',
        pointerEvents: 'auto',
      }}
      onClick={onClick}
      className={className}
    />
  );
}

Emoji.propTypes = {
  style: PropTypes.objectOf(PropTypes.any).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

Emoji.defaultProps = {
  onClick: null,
  className: null,
};

export default Emoji;
