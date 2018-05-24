import React, { Component } from 'react';
import './assets/Container.scss';
import Toolbar from "./Toolbar";
import PageHome from "./pages/PageHome";
import PagePortfolio from "./pages/PagePortfolio";

class Container extends Component {

    render() {

        const { page, previousBtnClick, nextBtnClick } = this.props;

        return (

            /* ------------------------- CONTAINER ------------------------- */

            <div className="container">

                {/* ------------------------- PAGE ------------------------- */}

                {page.id === 1 &&
                    <PageHome/>
                }

                {page.id === 2 &&
                    <PageHome/>
                }

                {page.id === 3 &&
                    <PagePortfolio/>
                }

                {page.id === 4 &&
                    <PageHome/>
                }

                {/* ------------------------- TOOLBAR ------------------------- */}

                <Toolbar
                    previousBtnClick={previousBtnClick}
                    nextBtnClick={nextBtnClick}
                />

            </div>
        );
    }
}

export default Container;
