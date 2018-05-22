import React, { Component } from 'react';
import './assets/App.scss';
import SideNav from "./components/SideNav";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="panel">
          <SideNav/>
          <Container/>
        </div>
      </div>
    );
  }
}

export default App;
