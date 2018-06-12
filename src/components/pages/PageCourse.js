import React, { Component } from 'react';
import './assets/PageCourse.scss';
import CourseThumb from "../CourseThumb";

const course1 = {id: 1, title: 'Lycée Jean-Perrin', year: '2014', desc: "Training in computer technologies, national diploma in the biggest technological high school of europe", type: "STUDY", isDiplomed: {state: true}, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Ravenna_High_School_1.jpg"};
const course2 = {id: 2, title: 'INSTA', year: '2016', desc: "Obtaining senior technician and license analyst and software architect at the National Institute of Advanced Technologies. Preparation of the master this year (2018).", type: "STUDY", isDiplomed: {state: true}, imgUrl: "https://sciencebusiness.net/sites/default/files/styles/article/public/2017-09/jussieu%20upmc%20paris.jpg?itok=rXG6BmZ_"};
const course3 = {id: 3, title: 'Technisites', year: '2016', desc: "Technician in center of centralization of print data of a network of medical analysis laboratory.", type: "WORK", isDiplomed: {state: false}, imgUrl: "https://printm3d.com/themicro/assets/img/scene2.jpg"};
const course4 = {id: 4, title: 'BNP Paribas', year: '2017', desc: "Developer of applications and web tools for financial data analysis and reporting for BNP Paribas, one of the largest European bank.", type: "WORK", isDiplomed: {state: false}, imgUrl: "https://www.worldbuild365.com/serveFile/media/news/4f87658ef0de194413056248a00ce009/7dd651f26d6d8a57a5aaddc8c0b57031.jpg"};

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
