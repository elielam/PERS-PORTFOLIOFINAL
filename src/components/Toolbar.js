import React, { Component } from 'react';
import './assets/Toolbar.scss';

class Toolbar extends Component {
    render() {

        const { previousBtnClick, nextBtnClick } = this.props;

        return (

            /* ------------------------- TOOLBAR ------------------------- */

            <div className="toolbar">

                {/* PREVIOUS BTN */}

                <a className="direction-btn previous" onClick={previousBtnClick}>

                </a>

                {/* ------------------------- LINKS ------------------------- */}

                <div className="links">

                    {/* LINK */}

                    <a className="link">
                        <i className="fas fa-home fa-2x"/>
                    </a>
                </div>

                {/* NEXT BTN */}

                <a className="direction-btn next" onClick={nextBtnClick}>

                </a>

            </div>
        );
    }
}

export default Toolbar;
