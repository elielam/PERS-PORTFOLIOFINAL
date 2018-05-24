import React, { Component } from 'react';
import './assets/PageHome.scss';

class PageHome extends Component {

    render() {

        function lineHover () {
            console.log('Line #1 HOVER')
        }

        return (

            /* ------------------------- PAGE HOME ------------------------- */

            <div className="page">

                <div className="header">

                </div>

                <div className="thumbs">
                    <div className="thumb"/>
                    <div className="thumb"/>
                    <div className="thumb"/>
                </div>

                <div className="stats">
                    <div className="line" onMouseEnter={lineHover.bind(this)}/>
                    <div className="line"/>
                    <div className="line"/>
                </div>

            </div>
        );
    }
}

export default PageHome;
