import React, { Component } from 'react';
import './assets/Toolbar.scss';

class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar">
                <a className="direction-btn previous">

                </a>
                <div className="links">
                <a className="link">
                    <i className="fas fa-home fa-2x"/>
                </a>
                </div>
                <a className="direction-btn next">

                </a>
            </div>
        );
    }
}

export default Toolbar;
