import React, { Component } from 'react';
import './assets/Toolbar.scss';

class Toolbar extends Component {
    render() {
        return (

            /* ------------------------- TOOLBAR ------------------------- */

            <div className="toolbar">

                {/* PREVIOUS BTN */}

                <a className="direction-btn previous">

                </a>

                {/* ------------------------- LINKS ------------------------- */}

                <div className="links">

                    {/* LINK */}

                    <a className="link">
                        <i className="fas fa-home fa-2x"/>
                    </a>
                </div>

                {/* NEXT BTN */}

                <a className="direction-btn next">

                </a>

            </div>
        );
    }
}

export default Toolbar;
