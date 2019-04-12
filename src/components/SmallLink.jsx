import React from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import { observer } from 'mobx-react';
import dayStore from '../store/day';

const style = {
  textDecoration: 'none',
  fontWeight: 'bold',
};

class SmallLink extends React.Component {
  state = { linkHovered: false };

  onHover = () => {
    const newState = { ...this.state, linkHovered: true };
    this.setState(newState);
  };

  onHoverCancel = () => {
    const newState = { ...this.state, linkHovered: false };
    this.setState(newState);
  };

  render() {
    const { href, children } = this.props;
    const { linkHovered } = this.state;

    return (
      <Spring
        to={{
          boxShadow: `inset 0 ${linkHovered ? '-1px' : '0px'} 0 ${dayStore.day ? 'black' : 'white'}`,
          color: dayStore.day ? 'black' : 'white',
        }}
      >
        { linkStyle => (
          <a
            onMouseOut={this.onHoverCancel}
            onMouseOver={this.onHover}
            href={href}
            style={{ ...style, ...linkStyle }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        )}
      </Spring>
    );
  }
}

SmallLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default observer(SmallLink);
