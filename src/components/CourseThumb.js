import React, { Component } from 'react';
import './assets/CourseThumb.scss';

import BackgroundJP from '../assets/imgs/courses/jp.jpg'
import BackgroundINSTA from '../assets/imgs/courses/insta.jpg'
import BackgroundTECHNISITES from '../assets/imgs/courses/technisites.jpg'
import BackgroundBNP from '../assets/imgs/courses/bnp.jpg'

class CourseThumb extends Component {
    render() {

        const { course } = this.props;

        let style ={};

        if(course.id === 1) {
            style = {
                backgroundImage: `url(${BackgroundJP})`,
                backgroundSize: "cover",
                margin: "0 !important",
                padding: "0 !important",

                minHeight: "100% !important",
                height: "100% !important",
                maxHeight: "100%!important",

                minWidth: "100%!important",
                width: "100% !important",
                maxWidth: "100% !important",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            };
        }

        if(course.id === 2) {
            style = {
                backgroundImage: `url(${BackgroundINSTA})`,
                backgroundSize: "cover",
                margin: "0 !important",
                padding: "0 !important",

                minHeight: "100% !important",
                height: "100% !important",
                maxHeight: "100%!important",

                minWidth: "100%!important",
                width: "100% !important",
                maxWidth: "100% !important",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            };
        }

        if(course.id === 3) {
            style = {
                backgroundImage: `url(${BackgroundTECHNISITES})`,
                backgroundSize: "cover",
                margin: "0 !important",
                padding: "0 !important",

                minHeight: "100% !important",
                height: "100% !important",
                maxHeight: "100%!important",

                minWidth: "100%!important",
                width: "100% !important",
                maxWidth: "100% !important",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            };
        }

        if(course.id === 4) {
            style = {
                backgroundImage: `url(${BackgroundBNP})`,
                backgroundSize: "cover",
                margin: "0 !important",
                padding: "0 !important",

                minHeight: "100% !important",
                height: "100% !important",
                maxHeight: "100%!important",

                minWidth: "100%!important",
                width: "100% !important",
                maxWidth: "100% !important",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            };
        }

        return (

            /* ------------------------- PROJECT TAB ------------------------- */

            <div className="course-thumb" style={style}>
                <div className="infos">

                    {/* Todo : remove */}
                    {/*{course.isDiplomed.state === true && (*/}
                        {/*<i class="fas fa-graduation-cap fa-2x"></i>*/}
                    {/*)}*/}

                </div>
                <div className="year">
                    <p>{course.year}</p>
                    <p1>{course.type}</p1>
                    <p2>{course.title}</p2>
                </div>
                <div className="desc">
                    <p>{course.desc}</p>
                </div>
            </div>

        );
    }
}

export default CourseThumb;
