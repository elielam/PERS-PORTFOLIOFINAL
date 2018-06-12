import React, { Component } from 'react';
import './assets/PageHome.scss';
import {Tooltip} from "@material-ui/core";

class PageHome extends Component {

    render() {

        return (

            /* ------------------------- PAGE HOME ------------------------- */

            <div className="page">

                <div className="header"/>

                <div className="thumbs">
                    <div className="thumb">
                        <div className="logo">
                            <i className="fab fa-sass fa-5x"/>
                            <p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>
                        </div>

                        {/*<div className="title">*/}
                            {/*<p>TITLE</p>*/}
                        {/*</div>*/}

                    </div>
                    <div className="thumb">
                        <div className="logo">
                            <i className="fab fa-react fa-5x"/>
                            <p>React is a JavaScript library for building user interfaces. Design simple views for each state in your application.</p>
                        </div>
                    </div>
                    <div className="thumb">
                        <div className="logo">
                            <i className="fab fa-google fa-5x"/>
                            <p>Suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products.</p>
                        </div>
                    </div>
                </div>

                <div className="stats">

                    <div className="line">
                        <Tooltip id="tooltip-icon" title="Code lines" placement="right">
                            <div className="progress-bar first">
                                <p>2938</p>
                            </div>
                        </Tooltip>
                    </div>


                    <div className="line">
                        <Tooltip id="tooltip-icon" title="Files" placement="right">
                            <div className="progress-bar second">
                                <p>27</p>
                            </div>
                        </Tooltip>
                    </div>


                    <div className="line">
                        <Tooltip id="tooltip-icon" title="Days of work" placement="right">
                            <div className="progress-bar third">
                                <p>12</p>
                            </div>
                        </Tooltip>
                    </div>

                </div>

            </div>
        );
    }
}

export default PageHome;
