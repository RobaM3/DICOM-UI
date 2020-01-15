//App.js
//Importing the React library
import React, { Component } from 'react';
//Importing the styling for the app
import './App.css';
//Importing the header component
import Header from './components/layout/Header';
//Importing the image viewer element
import ImageViewer from './components/ImageViewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <ImageViewer />
      </div>
    );
  }
}

export default App;