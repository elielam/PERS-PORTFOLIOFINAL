import React, { Component } from 'react';
import './assets/CourseThumb.scss';

class CourseThumb extends Component {
    render() {

        const { course } = this.props;

        const style = {
            backgroundImage: "url(" + course.imgUrl + ")",
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
