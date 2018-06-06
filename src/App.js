import React, { Component } from 'react';
import './assets/App.scss';
import SideNav from "./components/SideNav";
import Container from "./components/Container";
import MapModal from "./components/MapModal";
import ProjectModal from "./components/ProjectModal";
import ContactModal from "./components/ContactModal";

const PAGEHOME = { id: 1, title: "HOME"};
const PAGECOURSE = { id: 2, title: "COURSE"};
const PAGEPORTFOLIO = { id: 3, title: "PORTFOLIO"};

class App extends Component {
    state = {
        page : PAGEHOME,
        openMapModal: false,
        openProjectModal: false,
        openContactModal: false
    };

    handlePreviousBtn() {
        let pageID = this.state.page.id;
        switch (pageID) {
            case 1:
                alert('start');
                break;
            case 2:
                this.setState({
                    page: {...PAGEHOME}
                });
                break;
            case 3:
                this.setState({
                    page: {...PAGECOURSE}
                });
                break;
            default:
                alert("An error occurred");
                window.location = "/";
                break;
        }
    }

    handleNextBtn() {
        let pageID = this.state.page.id;
        switch (pageID) {
            case 1:
                this.setState({
                    page: {...PAGECOURSE}
                });
                break;
            case 2:
                this.setState({
                    page: {...PAGEPORTFOLIO}
                });
                break;
            case 3:
                alert('finish');
                break;
            default:
                alert("An error occurred");
                window.location = "/";
                break;
        }
    }

    handleHomeBtn() {
        this.setState({
            page: {...PAGEHOME}
        });
    }

    handleNavSide1Btn() {
        this.setState({
            page: {...PAGEHOME}
        });
    }

    handleNavSide2Btn() {
        this.setState({
            page: {...PAGECOURSE}
        });
    }

    handleNavSide3Btn() {
        this.setState({
            page: {...PAGEPORTFOLIO}
        });
    }

    handleMapModalOpen = () => {
        this.setState({ openMapModal: true });
    };

    handleMapModalClose = () => {
        this.setState({ openMapModal: false });
    };

    handleProjectModalOpen = () => {
        this.setState({ openProjectModal: true });
    };

    handleProjectModalClose = () => {
        this.setState({ openProjectModal: false });
    };

    handleContactModalOpen = () => {
        this.setState({ openContactModal: true });
    };

    handleContactModalClose = () => {
        this.setState({ openContactModal: false });
    };

  render() {
    return (

        /* ------------------------- TOOLBAR ------------------------- */

        <div className="App">

            {/* ------------------------- PANEL ------------------------- */}

            <div className="panel">

                {/* ------------------------- SIDENAV ------------------------- */}



                <SideNav
                    page={this.state.page}
                    handleBtn1={this.handleNavSide1Btn.bind(this)}
                    handleBtn2={this.handleNavSide2Btn.bind(this)}
                    handleBtn3={this.handleNavSide3Btn.bind(this)}
                    handleBtnMapModalOpen={this.handleMapModalOpen.bind(this)}
                    handleBtnContactModalOpen={this.handleContactModalOpen.bind(this)}
                />

                {/* ------------------------- CONTAINER ------------------------- */}

                <Container
                    page={this.state.page}
                    previousBtnClick={this.handlePreviousBtn.bind(this)}
                    nextBtnClick={this.handleNextBtn.bind(this)}
                    homeBtnClick={this.handleHomeBtn.bind(this)}
                    handleBtnProjectModalOpen={this.handleProjectModalOpen.bind(this)}
                />

                <ContactModal
                    open={this.state.openContactModal}
                    handleBtnContactModalClose={this.handleContactModalClose.bind(this)}
                />

                <MapModal
                    open={this.state.openMapModal}
                    handleBtnMapModalClose={this.handleMapModalClose.bind(this)}
                />

                <ProjectModal
                    open={this.state.openProjectModal}
                    handleBtnProjectModalClose={this.handleProjectModalClose.bind(this)}
                />

            </div>

        </div>
    );
  }
}

export default App;
