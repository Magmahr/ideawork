import React, {Component} from 'react'

class Post extends Component {

  render() {
    return (
    <div className='post'>
      <img className='post-img' href='http://www.dapcat.org/wp-content/uploads/2015/04/Blue-Nose-American-Pitbull-Terrier-Puppies-Picture-Collection.jpg' src={this.props.src} alt={this.props.title}></img>
      <p className='post-date'>{this.props.date}</p>
      <a className='post-title' href='https://kittenrescue.org/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg'>{this.props.title}</a>
      <p className='post-byline'>{this.props.byline} <a className='post-link' href='http://www.dapcat.org/wp-content/uploads/2015/04/Blue-Nose-American-Pitbull-Terrier-Puppies-Picture-Collection.jpg'>{this.props.link}</a></p>
      <hr className='post-line'></hr>

    </div>
  )
  }


}

export default Post
