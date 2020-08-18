import React, { Component } from 'react';
import axios from "axios";

import SearchBar from "./components/SearchBar/SearchBar";
import Cards from "./components/Cards/Cards"
import './App.css';

axios.defaults.baseURL = 'https://api.github.com'

class App extends Component {
  state = {
    inputVal: '',
    searchPemission: false
  };

  inputChangedHandler = (event) => {
    this.setState({inputVal: event.target.parentElement.firstElementChild.value})
    console.log()
  }
  searchResultsHandler = () => {
    this.setState({searchPemission: true})
  }

  render () {
    return (
      <div className="App">
        <h1>GitHub Profile Searcher</h1>
        <SearchBar search={(e) => this.inputChangedHandler(e)}/>
        <Cards query={this.state.inputVal}/>
      </div>
  );
  }
}

export default App;
