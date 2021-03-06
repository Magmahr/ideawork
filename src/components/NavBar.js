import React, { Component } from 'react';
import logo from '../assets/logo.png'
import HamburgerMenu from 'react-hamburger-menu'

class NavBar extends Component {

  state = {
    open: false,
  }

  handleClick = () => {
    this.setState({open: !this.state.open,})
  }

  render() {

    return (
      <div className='navbar'>
        <img id='logo' className='logo' src={logo} alt='logo'></img>
        <div className='navbar-items'>
          <p className='phone-number'>212.555.5555</p>
          <p className='login'>LOGIN</p>
            <div className='hamburger'>
              <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color='black'
              borderRadius={0}
              animationDuration={0.5}
              />
            </div>
          </div>
        </div>
    )

  }
}


export default NavBar
