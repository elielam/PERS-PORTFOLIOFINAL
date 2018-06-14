import React, { Component } from 'react';
import './assets/Toolbar.scss';

class Toolbar extends Component {
    render() {

        const { previousBtnClick, nextBtnClick, handleBtnLoginModalOpen } = this.props;

        return (

            /* ------------------------- TOOLBAR ------------------------- */

            <div className="toolbar">

                {/* PREVIOUS BTN */}

                <a className="direction-btn previous" onClick={previousBtnClick}>
                    <i className="fas fa-chevron-left fa-2x"/>
                </a>

                {/* ------------------------- LINKS ------------------------- */}

                <div className="links">

                    {/* LINK */}

                    <a className="link" onClick={handleBtnLoginModalOpen}>
                        <i className="fas fa-user fa-2x"/>
                    </a>
                </div>

                {/* NEXT BTN */}

                <a className="direction-btn next" onClick={nextBtnClick}>
                    <i className="fas fa-chevron-right fa-2x"/>
                </a>

            </div>
        );
    }
}

export default Toolbar;
