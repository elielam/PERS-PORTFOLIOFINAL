import React, { Component } from 'react';
import './assets/Toolbar.scss';

class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar">
                <div className="previous-btn-container-toolbar">
                    <i className="fas fa-arrow-left fa-2x"></i>
                </div>
                <div className="links-container">
                    <div className="link-toolbar">
                        <i className="fas fa-home fa-2x"></i>
                    </div>
                </div>
                <div className="next-btn-container-toolbar">
                    <i className="fas fa-arrow-right fa-2x"></i>
                </div>
            </div>
        );
    }
}

export default Toolbar;
