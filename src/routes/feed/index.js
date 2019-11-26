import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import * as styles from './styles.scss';
import Post from '../../components/Post';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isFetchingPosts: true,
      successFetchingPosts: false,
      fetchingPostsError: ''
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      if (response.status === 200) {
        this.setState({
          isFetchingPosts: false,
          posts: [...response.data],
          successFetchingPosts: true
        });
      }
    } catch (error) {
      this.setState({
        isFetchingPosts: false,
        successFetchingPosts: false,
        fetchingPostsError:
          'An error occured fetching your posts. Please try again.'
      });
    }
  }

  renderPosts = () => {
    return this.state.posts.map((post, index) => {
      return (
        <Post
          key={index.toString()}
          username={post.username}
          title={post.title}
          body={post.body}
        />
      );
    });
  };

  render() {
    const { isFetchingPosts } = this.state;
    const Loading = () => {
      return <div className='flex center-all'>One moment ...</div>;
    };

    const Content = () => {
      if (isFetchingPosts) {
        return <Loading />;
      } else {
        return (
          <div id='posts'>
            <Post
              key={'string'}
              username={'Bobajee'}
              title={'Voices'}
              body={'Voices body'}
            />
          </div>
        );
      }
    };

    return (
      <div id='feed'>
        <Content />
      </div>
    );
  }
}

export default Feed;

Feed.propTyes = {};
