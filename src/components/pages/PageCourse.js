import React, { Component } from 'react';
import './assets/PageCourse.scss';
import CourseThumb from "../CourseThumb";

const course1 = {id: 1, title: 'Lycée Jean-Perrin', year: '2014', desc: "Training in computer technologies, national diploma in the biggest technological high school of europe", type: "STUDY", isDiplomed: {state: true}};
const course2 = {id: 2, title: 'INSTA', year: '2016', desc: "Obtaining senior technician and license analyst and software architect at the National Institute of Advanced Technologies. Preparation of the master this year (2018).", type: "STUDY", isDiplomed: {state: true}};
const course3 = {id: 3, title: 'Technisites', year: '2016', desc: "Technician in center of centralization of print data of a network of medical analysis laboratory.", type: "WORK", isDiplomed: {state: false}};
const course4 = {id: 4, title: 'BNP Paribas', year: '2017', desc: "Developer of applications and web tools for financial data analysis and reporting for BNP Paribas, one of the largest European bank.", type: "WORK", isDiplomed: {state: false}};

class PageCourse extends Component {
    state = {
        course : 1,
    };

    handleBtnCoursePrevious() {
        let course = this.state.course;
        switch (course) {
            case 1:
                this.setState({
                    course : 4
                });
                break;
            case 2:
                this.setState({
                    course : 1
                });
                break;
            case 3:
                this.setState({
                    course : 2
                });
                break;
            case 4:
                this.setState({
                    course : 3
                });
                break;
            default:
                break;
        }
    }

    handleBtnCourseNext() {
        let course = this.state.course;
        switch (course) {
            case 1:
                this.setState({
                    course : 2
                });
                break;
            case 2:
                this.setState({
                    course : 3
                });
                break;
            case 3:
                this.setState({
                    course : 4
                });
                break;
            case 4:
                this.setState({
                    course : 1
                });
                break;
            default:
                break;
        }
    }

    render() {

        return (

            /* ------------------------- PAGE COURSE ------------------------- */

            <div className="page">
                <div className="vertical-direction-btn up" onClick={this.handleBtnCoursePrevious.bind(this)}>
                    <i className="fas fa-chevron-up"/>
                </div>
                <div className="courses-container">
                    {this.state.course === 1 && (
                        <CourseThumb
                            course={course1}
                        />
                    )}
                    {this.state.course === 2 && (
                        <CourseThumb
                            course={course2}
                        />
                    )}
                    {this.state.course === 3 && (
                        <CourseThumb
                            course={course3}
                        />
                    )}
                    {this.state.course === 4 && (
                        <CourseThumb
                            course={course4}
                        />
                    )}
                </div>
                <div className="vertical-direction-btn down" onClick={this.handleBtnCourseNext.bind(this)}>
                    <i className="fas fa-chevron-down"/>
                </div>
            </div>
        );
    }
}

export default PageCourse;
