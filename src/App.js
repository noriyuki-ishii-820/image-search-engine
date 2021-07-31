import './App.css';
import React, { Component } from 'react'
import Search from "../src/components/searchBar/Search"
import ImageRender from './components/imageRender/imageRender';

class App extends Component {
  state= {
    keywords: "",
  }

  handleInputChange = event => {
    this.setState({keywords: event.target.value})
  } 

  render(){
  return (
    
    <div className="App">
          <Search handleInputChange={this.handleInputChange} /> 
          <ImageRender keywords={this.state.keywords}/>
    </div>
  );
}
}
export default App;
