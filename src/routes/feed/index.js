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

    window.onscroll = this.handleOnScroll;
  }

  renderPosts = () => {
    return this.state.posts.map((post, index) => {
      return (
        <Post
          key={index.toString()}
          username={post.userId}
          title={post.title}
          body={post.body}
        />
      );
    });
  };

  handleOnScroll = e => {
    console.log(this.postRef);
  };

  render() {
    const { isFetchingPosts, fetchingPostsError } = this.state;
    const Loading = () => {
      return <div className='flex center-all'>One moment ...</div>;
    };

    const FetchingPostsError = () => {
      return <div className='error'>{fetchingPostsError}</div>;
    };

    const Content = () => {
      if (isFetchingPosts) {
        return <Loading />;
      } else if (fetchingPostsError !== '') {
        return <FetchingPostsError />;
      } else {
        return <div id='posts'>{this.renderPosts()}</div>;
      }
    };

    return (
      <div id='feed' className='flex center-all' onScroll={this.handleOnScroll}>
        <Content />
      </div>
    );
  }
}

export default Feed;

Feed.propTyes = {};
