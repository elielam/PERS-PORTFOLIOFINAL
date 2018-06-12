import React, { Component } from 'react';
import './assets/Container.scss';

import Toolbar from "./Toolbar";
import PageHome from "./pages/PageHome";
import PageCourse from "./pages/PageCourse";
import PagePortfolio from "./pages/PagePortfolio";

class Container extends Component {

    render() {

        const { page, previousBtnClick, nextBtnClick, handleBtnProjectModalOpen, modalAlertExperimental, handleModalAlertExperimentalClose } = this.props;

        return (

            /* ------------------------- CONTAINER ------------------------- */

            <div className="container">

                {/* ------------------------- PAGE ------------------------- */}

                {page.id === 1 &&
                    <PageHome/>
                }

                {page.id === 2 &&
                    <PageCourse/>
                }

                {page.id === 3 &&
                    <PagePortfolio
                        handleBtnProjectModalOpen={handleBtnProjectModalOpen}
                        modalAlertExperimental={modalAlertExperimental}
                        handleModalAlertExperimentalClose={handleModalAlertExperimentalClose}
                    />
                }

                {/* ------------------------- TOOLBAR ------------------------- */}

                <Toolbar
                    page={page}
                    previousBtnClick={previousBtnClick}
                    nextBtnClick={nextBtnClick}
                />

            </div>
        );
    }
}

export default Container;
