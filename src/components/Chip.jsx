import React from 'react';
import PropTypes from 'prop-types';

const style = {
  margin: '5px 0px 0px 5px',
  color: 'rgb(0, 123, 255)',
  border: '1px solid rgb(0, 123, 255)',
  borderRadius: '5px',
  paddingLeft: '5px',
  paddingRight: '5px',
  fontWeight: 'bold',
  fontSize: '10pt',
  whiteSpace: 'nowrap',
  height: '20pt',
  lineHeight: '20pt',
  fontFamily: 'Inconsolata,monospace',
  letterSpacing: 0.5,
};

function Chip(props) {
  const { children } = props;

  return (
    <span style={style}>{children}</span>
  );
}

Chip.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Chip;
