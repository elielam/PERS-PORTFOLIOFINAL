import React, { Component } from 'react';
import './assets/Container.scss';
import Toolbar from "./Toolbar";
import PageHome from "./pages/PageHome";
import PagePortfolio from "./pages/PagePortfolio";

class Container extends Component {
    render() {
        return (

            /* ------------------------- CONTAINER ------------------------- */

            <div className="container">

                {/* ------------------------- PAGE ------------------------- */}

                <PageHome/>
                {/*<PagePortfolio/>*/}

                {/* ------------------------- TOOLBAR ------------------------- */}

                <Toolbar/>

            </div>
        );
    }
}

export default Container;
