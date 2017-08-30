import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/navbar'
import PictureInfo from './Components/pictureInfo'
import Footer from './Components/footer'
import Workflow from './Components/workflow'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <PictureInfo/>
      <Workflow/>
      <Footer/>
      </div>
    );
  }
}

export default App;
