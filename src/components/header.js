import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { title } = props;

  return <header style={styles}></header>;
}

Header.propTypes = {};

export default memo(Header);
