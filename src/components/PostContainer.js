import React, {Component} from 'react'
import PostContent from './PostContent'
import Post from './Post'

class PostContainer extends Component {

render() {

    let content = PostContent
    let windowWidth = window.innerWidth

    const dateSort = () => {
      let sortedPosts = []
      PostContent.map(post => sortedPosts[post.dateValue] = post)
      return sortedPosts
    }


    function contentChange() {
      if (windowWidth < 720) {
        content = dateSort()
      } else {
        content = PostContent
      }
    }

    window.addEventListener("resize", contentChange());


    return (
    <div className='post-container'>
      {content.map(post => <div className='post-wrapper'> <Post
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
