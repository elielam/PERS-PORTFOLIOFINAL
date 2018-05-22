import React, { Component } from 'react';
import './assets/Container.scss';
import Toolbar from "./Toolbar";

class Container extends Component {
    render() {
        return (
            <div className="container">
                <div className="page">
                </div>
                <Toolbar/>
            </div>
        );
    }
}

export default Container;
