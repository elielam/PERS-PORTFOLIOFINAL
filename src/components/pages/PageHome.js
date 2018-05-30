import React, { Component } from 'react';
import './assets/PageHome.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
                        </div>
                        {/*<div className="title">*/}
                            {/*<p>TITLE</p>*/}
                        {/*</div>*/}
                    </div>
                    <div className="thumb">
                        <div className="logo">
                            <i className="fab fa-react fa-5x"/>
                        </div>
                    </div>
                    <div className="thumb">
                        <div className="logo">
                            <i className="fab fa-docker fa-5x"/>
                        </div>
                    </div>
                </div>

                <div className="stats">
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>

                        {
                            <div className="line">
                                <div className="progress-bar first">
                                    <p>80%</p>
                                </div>
                            </div>
                        }
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>

                        {
                            <div className="line">
                                <div className="progress-bar second">
                                    <p>60%</p>
                                </div>
                            </div>
                        }
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>

                        {
                            <div className="line">
                                <div className="progress-bar third">
                                    <p>40%</p>
                                </div>
                            </div>
                        }
                    </ReactCSSTransitionGroup>

                </div>

            </div>
        );
    }
}

export default PageHome;
