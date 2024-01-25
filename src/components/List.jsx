import React from 'react';

const style = {
  title: {
    fontWeight: 'bold',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
  },
  container: {
    paddingBottom: '10px',
  },
};

function List(props) {
  const { items, title } = props;

  return (
    <div style={style.container}>
      <div style={style.title}>{title}</div>
      <ul style={style.list}>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default List;
