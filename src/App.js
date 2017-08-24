import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/navbar'
import PictureInfo from './Components/pictureInfo'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <PictureInfo/>
      <div>Workflow</div>
      </div>
    );
  }
}

export default App;
