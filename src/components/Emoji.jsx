import React from 'react';
import PropTypes from 'prop-types';


function Emoji(props) {
  const {
    style, symbol, onClick, className,
  } = props;
  return (
    <button
      style={{
        fontSize: 'inherit',
        ...style,
        padding: 0,
        border: 'none',
        background: 'none',
        outline: 'none',
        pointerEvents: 'auto',
      }}
      onClick={onClick}
      type="button"
      className={className}
    >
      {symbol}
    </button>
  );
}

Emoji.propTypes = {
  style: PropTypes.objectOf(PropTypes.any).isRequired,
  symbol: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Emoji.defaultProps = {
  onClick: null,
  className: null
};

export default Emoji;
