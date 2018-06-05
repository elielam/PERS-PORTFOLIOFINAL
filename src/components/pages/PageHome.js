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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus leo quis velit venenatis ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                        </div>

                        {/*<div className="title">*/}
                            {/*<p>TITLE</p>*/}
                        {/*</div>*/}

                    </div>
                    <div className="thumb">
                        <div className="logo">
                            <i className="fab fa-react fa-5x"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus leo quis velit venenatis ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                        </div>
                    </div>
                    <div className="thumb">
                        <div className="logo">
                            <i className="fab fa-docker fa-5x"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus leo quis velit venenatis ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                        </div>
                    </div>
                </div>

                <div className="stats">

                    <div className="line">
                        <Tooltip id="tooltip-icon" title="Info bar" placement="right">
                            <div className="progress-bar first">
                                <p>80%</p>
                            </div>
                        </Tooltip>
                    </div>


                    <div className="line">
                        <Tooltip id="tooltip-icon" title="Info bar 2" placement="right">
                            <div className="progress-bar second">
                                <p>60%</p>
                            </div>
                        </Tooltip>
                    </div>


                    <div className="line">
                        <Tooltip id="tooltip-icon" title="Info bar 3" placement="right">
                            <div className="progress-bar third">
                                <p>40%</p>
                            </div>
                        </Tooltip>
                    </div>

                </div>

            </div>
        );
    }
}

export default PageHome;
