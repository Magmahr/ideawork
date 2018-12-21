import React, {Component} from 'react'

class Post extends Component {

  render() {
    return (
    <div className='post'>
      <p className='post-date'>{this.props.date}</p>
      <img className='post-img' src={this.props.src} alt={this.props.title}></img>
      <a className='post-title'>{this.props.title}</a>
      <p className='post-byline'>{this.props.byline} <a className='post-link'>{this.props.link}</a></p>

    </div>
  )
  }


}

export default Post
