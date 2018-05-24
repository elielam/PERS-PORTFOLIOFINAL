import React, { Component } from 'react';
import './assets/PageHome.scss';

class PageHome extends Component {

    render() {

        return (

            /* ------------------------- PAGE HOME ------------------------- */

            <div className="page">

                <div className="header"/>

                <div className="thumbs">
                    <div className="thumb"/>
                    <div className="thumb"/>
                    <div className="thumb"/>
                </div>

                <div className="stats">
                    <div className="line"/>
                    <div className="line"/>
                    <div className="line"/>
                </div>

            </div>
        );
    }
}

export default PageHome;
