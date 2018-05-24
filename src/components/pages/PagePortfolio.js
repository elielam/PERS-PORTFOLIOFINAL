import React, { Component } from 'react';
import './assets/PagePortfolio.scss';

class PagePortfolio extends Component {
    state = {
        title: 'Portfolio',
    };

    render() {

        return (

            /* ------------------------- PAGE PORTFOLIO ------------------------- */

            <div className="page">

                <div className="selectors">
                    <div className="tag first"/>
                    <div className="tag"/>
                    <div className="tag"/>
                    <div className="tag last"/>
                </div>

                <div className="projects">
                    <div className="row">
                        <div className="col"/>
                        <div className="col"/>
                        <div className="col"/>
                        <div className="col"/>
                    </div>
                    <div className="row">
                        <div className="col"/>
                        <div className="col"/>
                        <div className="col"/>
                        <div className="col"/>
                    </div>
                    <div className="row">
                        <div className="col"/>
                        <div className="col"/>
                        <div className="col"/>
                        <div className="col"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default PagePortfolio;
