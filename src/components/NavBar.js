import React, { Component } from 'react';
import logo from '../assets/logo.png'
import HamburgerMenu from 'react-hamburger-menu'

class NavBar extends Component {

  render() {

    return (
      <div className='navbar'>
        <img id='logo' className='logo' src={logo} alt='logo'></img>
        <div className='navbar-items'>
          <p className='phone-number'>212.555.5555</p>
          <p className='login'>LOGIN</p>
            <p className='hamburger'>
              <HamburgerMenu
              // isOpen={this.state.open}
              // menuClicked={this.handleClick.bind(this)}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color='black'
              borderRadius={0}
              animationDuration={0.5}
              />
            </p>
          </div>
        </div>
    )

  }
}


export default NavBar
