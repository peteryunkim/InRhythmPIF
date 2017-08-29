import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/navbar'
import PictureInfo from './Components/pictureInfo'
import Footer from './Components/footer'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <PictureInfo/>
      <div>Workflow</div>
      <Footer/>
      </div>
    );
  }
}

export default App;
