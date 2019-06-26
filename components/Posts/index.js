import React from 'react';
import POSTS from './Posts';
import Post from './Post';

// const Posts = () => POSTS.map(post => (
//   <Post
//     key={post.title}
//     title={post.title}
//     description={post.description}
//     favorite={post.favorite}
//   />
// ));

// const Posts = () => (
//   POSTS.map(Post)
// );
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: POSTS,
    };
  }

  removePosts(index) {
    const {
      posts,
    } = this.state;

    const newPosts = [
      ...posts,
    ];

    newPosts.splice(index, 1);

    this.setState({
      posts: newPosts,
    });
  }

  render() {
    const {
      posts,
    } = this.state;

    return posts.map((props, index) => (
      <Post key={props.title} index={index} {...props} onClick={this.removePosts.bind(this)} />
    ));
  }
}

export default Posts;
