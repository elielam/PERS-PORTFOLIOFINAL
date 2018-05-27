import React, { Component } from 'react';
import './assets/Toolbar.scss';

class Toolbar extends Component {
    render() {

        const { page, previousBtnClick, nextBtnClick, homeBtnClick } = this.props;

        return (

            /* ------------------------- TOOLBAR ------------------------- */

            <div className="toolbar">

                {/* PREVIOUS BTN */}

                {page.id === 1 ? (
                    <a className="direction-btn previous disabled" onClick={previousBtnClick}>
                        <i className="fas fa-times fa-2x"/>
                    </a>
                ):(
                    <a className="direction-btn previous" onClick={previousBtnClick}>
                        <i className="fas fa-chevron-left fa-2x"/>
                    </a>
                )}

                {/* ------------------------- LINKS ------------------------- */}

                <div className="links">

                    {/* LINK */}

                    <a className="link" onClick={homeBtnClick}>
                        <i className="fas fa-home fa-2x"/>
                    </a>
                </div>

                {/* NEXT BTN */}

                {page.id === 3 ? (
                    <a className="direction-btn next disabled" onClick={nextBtnClick}>
                        <i className="fas fa-times fa-2x"/>
                    </a>
                ):(
                    <a className="direction-btn next" onClick={nextBtnClick}>
                        <i className="fas fa-chevron-right fa-2x"/>
                    </a>
                )}

            </div>
        );
    }
}

export default Toolbar;
