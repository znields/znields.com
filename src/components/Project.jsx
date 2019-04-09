import React from 'react';
import PropTypes from 'prop-types';

const style = {
  icon: {
    marginTop: '0.5em',
    height: '25pt',
    marginLeft: '12.5pt',
    whiteSpace: 'nowrap',
    display: 'inline-block',
  },
  title: {
    fontWeight: 'bold',
    margin: '0 0 0 0',
    width: '25px',
  },
  description: {
    marginLeft: '15pt',
  },
};

function Project(props) {
  const {
    icon, title, children, stack,
  } = props;

  return (
    <div>
      <div>
        <span style={style.icon}>
          <img src={icon} style={style.icon} alt="icon" />
        </span>
        <p style={style.title}>
          &nbsp;
          &nbsp;
          {title}
        </p>
      </div>
      <div>
        <p style={style.description}>
          {children}
        </p>
      </div>

    </div>
  );
}

Project.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(String).isRequired,
};

export default Project;
