import React, {Component} from 'react'
import PostContent from './PostContent'
import Post from './Post'

let content
let sortedPosts = []

class PostContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {windowWidth: window.innerWidth}
  }


  dateSort = () => {
    let duplicate = PostContent
    duplicate.map(post => sortedPosts[post.dateValue] = post)
    return(sortedPosts)
  }

  componentWillMount() {
    content = PostContent
  }

  componentDidMount() {
    window.addEventListener("resize", this.widthChange)
  }


  render() {

    this.widthChange = () => {
      this.dateSort()
      this.setState({windowWidth: window.innerWidth})
      this.state.windowWidth < 720 ? content = sortedPosts : content = PostContent
    }

    return (
    <div className='post-container'>
      {content.map(post => <div className='post-wrapper'> <Post
        key={post.id}
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
