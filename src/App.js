import React, { Component } from 'react';
import './assets/App.scss';
import SideNav from "./components/SideNav";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (

        /* ------------------------- TOOLBAR ------------------------- */

        <div className="App">

            {/* ------------------------- PANEL ------------------------- */}

            <div className="panel">

                {/* ------------------------- SIDENAV ------------------------- */}

                <SideNav/>

                {/* ------------------------- CONTAINER ------------------------- */}

                <Container/>

            </div>

        </div>
    );
  }
}

export default App;
