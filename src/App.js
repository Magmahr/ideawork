import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import CarouselComponent from './components/CarouselComponent'
import PostContainer from './components/PostContainer'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className='App'>
      <NavBar />
      <CarouselComponent />
      <PostContainer />
      <Footer />
      </div>
    );
  }
}

export default App;
