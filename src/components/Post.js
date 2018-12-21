import React, {Component} from 'react'

class Post extends Component {

  render() {
    return (
    <div className='post'>
      <a href='#' src={props.src} alt={props.title}></a>
      <p className='post-date'>{props.date}</p>
      <a><h1 className='post-title'>{props.title}</h1></a>
      <p>{props.byline}</p>
      <a>{props.link}</a>
      />
    ))}
    </div>
  )
  }


}

export default Post
