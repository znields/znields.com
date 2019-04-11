import React from 'react';

const style = {
  margin: '10px 0px 0px 15px',
  color: 'rgb(0, 123, 255)',
  border: '1px solid rgb(0, 123, 255)',
  borderRadius: '5px',
  paddingLeft: '10px',
  paddingRight: '10px',
  fontWeight: 'bold',
  fontSize: '10pt',
  whiteSpace: 'nowrap',
};

function Chip(props) {
  const { children } = props;

  return (
    <span style={style}>{children}</span>
  );
}

export default Chip;
