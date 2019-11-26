import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return <div id='feed'></div>;
  }
}

export default Feed;

Feed.propTyes = {};
