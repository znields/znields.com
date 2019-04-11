import React from 'react';
import PropTypes from 'prop-types';

function SmallLink(props) {
  const { href, children } = props;
  return (
    <a href={href} className="small-link" target="_blank" rel="noopener noreferrer">{children}</a>
  );
}

SmallLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default SmallLink;
