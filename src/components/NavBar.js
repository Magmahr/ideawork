import React, { Component } from 'react';
import logo from '../assets/logo.png'

class NavBar extends Component {

  render() {

    return (
      <div className='navbar'>
      <img id='logo' className='logo' src={logo} alt='logo'></img>
      <span></span><p className='phone-number'>212.555.5555</p>


      </div>
    )

  }
}


export default NavBar
