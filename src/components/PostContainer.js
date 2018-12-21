import React, {Component} from 'react'
import PostContent from './PostContent'
import Post from './Post'

class PostContainer extends Component {

render() {

    return (
    <div className='post-container'>
      {PostContent.map(post => <div className='post-wrapper'> <Post
        id={post.id}
        date={post.date}
        title={post.title}
        byline={post.byline}
        link={post.link}
        src={post.src}
      /></div>)}
    </div>
  )
}


}

export default PostContainer
