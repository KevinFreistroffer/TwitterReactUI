import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as styles from './styles.scss';

function Post(props) {
  const { username, title, body } = props;

  useEffect(() => {
    console.log(props);
  });

  return (
    <div className='post flex column space-around' style={styles}>
      <div className='username'>{username}</div>
      <div className='title'>{title}</div>
      <div className='body'>{body}</div>
    </div>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default memo(Post);
