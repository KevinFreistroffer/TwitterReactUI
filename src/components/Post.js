import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  const {} = props;

  useEffect(() => {
    console.log(props);
  });

  return (
    <div className='post'>
      <pre>{}</pre>
    </div>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default memo(Post);
