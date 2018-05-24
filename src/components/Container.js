import React, { Component } from 'react';
import './assets/Container.scss';
import Toolbar from "./Toolbar";

class Container extends Component {
    render() {
        return (

            /* ------------------------- CONTAINER ------------------------- */

            <div className="container">

                {/* ------------------------- PAGE ------------------------- */}

                <div className="page"></div>

                {/* ------------------------- TOOLBAR ------------------------- */}

                <Toolbar/>

            </div>
        );
    }
}

export default Container;
