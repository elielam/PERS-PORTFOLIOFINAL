import React, { Component } from 'react';
import './assets/PagePortfolio.scss';

class PagePortfolio extends Component {

    render() {

        return (

            /* ------------------------- PAGE PORTFOLIO ------------------------- */

            <div className="page">

                {/* SELECTORS */}

                <div className="selectors">
                    <div className="tag first">
                        <p>CLIENT</p>
                    </div>
                    <div className="tag">
                        <p>JAVA</p>
                    </div>
                    <div className="tag">
                        <p>C</p>
                    </div>
                    <div className="tag last">
                        <p>DESIGN</p>
                    </div>
                </div>

                {/* PROJECTS */}

                <div className="projects">
                    <div className="row">
                        <div className="col">
                            <img src="" alt=""/>
                            <div className="overlay"/>
                        </div>
                        <div className="col">
                            <img src="" alt="" className="test1"/>
                            <div className="overlay"/>
                        </div>
                        <div className="col">
                            <img src="" alt="" className="test2"/>
                            <div className="overlay"/>
                        </div>
                        <div className="col">
                            <img src="" alt="" className="test3"/>
                            <div className="overlay"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                            <div className="overlay"/>
                        </div>
                        <div className="col">

                            <div className="overlay"/>
                        </div>
                        <div className="col">

                            <div className="overlay"/>
                        </div>
                        <div className="col">

                            <div className="overlay"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                            <div className="overlay"/>
                        </div>
                        <div className="col">

                            <div className="overlay"/>
                        </div>
                        <div className="col">

                            <div className="overlay"/>
                        </div>
                        <div className="col">

                            <div className="overlay"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PagePortfolio;
