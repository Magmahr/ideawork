import React, {Component} from 'react'
import PostContent from './PostContent'
import Post from './Post'

class PostContainer extends Component {

render() {

    return (
    <div ClassName='PostContainer'>
    {PostContent.map(post => <Post
        id={post.id}
        date={post.date}
        title={post.title}
        byline={post.byline}
        link={post.link}
        src={post.src}
      />)}
    </div>
  )
}


}

export default PostContainer
