import React, { memo, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as styles from './styles.scss';

function Header(props) {
  const { title, route } = props;

  function routeTo(route) {
    props.history.push(`/${route}`);
  }

  return (
    <header className='flex space-between' style={styles}>
      <h1 id='title'>
        <Link to='/feed'>{title}</Link>
      </h1>
      <button id='post-button' onClick={() => routeTo('post')}>
        Post
      </button>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string
};

export default withRouter(memo(Header));
