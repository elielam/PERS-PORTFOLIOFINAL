import React, { Component } from 'react';
import './assets/App.scss';
import SideNav from "./components/SideNav";
import Container from "./components/Container";

const PAGEHOME = { id: 1, title: "HOME"};
const PAGECOURSE = { id: 2, title: "COURSE"};
const PAGEPORTFOLIO = { id: 3, title: "PORTFOLIO"};
const PAGETEST = { id: 4, title: "TEST"};

class App extends Component {
    state = {
        page : PAGEHOME,
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
            case 4:
                this.setState({
                    page: {...PAGEPORTFOLIO}
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
                this.setState({
                    page: {...PAGETEST}
                });
                break;
            case 4:
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
            page: {...PAGECOURSE}
        });
    }

    handleNavSide2Btn() {
        this.setState({
            page: {...PAGEPORTFOLIO}
        });
    }

    handleNavSide3Btn() {
        this.setState({
            page: {...PAGETEST}
        });
    }

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
                />

                {/* ------------------------- CONTAINER ------------------------- */}

                <Container
                    page={this.state.page}
                    previousBtnClick={this.handlePreviousBtn.bind(this)}
                    nextBtnClick={this.handleNextBtn.bind(this)}
                    homeBtnClick={this.handleHomeBtn.bind(this)}
                />

            </div>

        </div>
    );
  }
}

export default App;
