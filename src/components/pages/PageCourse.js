import React, { Component } from 'react';
import './assets/PageCourse.scss';
import CourseThumb from "../CourseThumb";

const course1 = {id: 1, title: 'Lycée JP', year: '2014', isDiplomed: {state: true}};
const course2 = {id: 2, title: 'CFA INSTA', year: '2016', isDiplomed: {state: true}};
const course3 = {id: 3, title: 'BNP', year: '2017', isDiplomed: {state: false}};

class PageCourse extends Component {
    state = {
        course : 1,
    };

    handleBtnCoursePrevious() {
        let course = this.state.course;
        switch (course) {
            case 1:
                this.setState({
                    course : 3
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
                <div className="vertical-direction-btn up" onClick={this.handleBtnCourseNext.bind(this)}>
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
                </div>
                <div className="vertical-direction-btn down" onClick={this.handleBtnCoursePrevious.bind(this)}>
                    <i className="fas fa-chevron-down"/>
                </div>
            </div>
        );
    }
}

export default PageCourse;
