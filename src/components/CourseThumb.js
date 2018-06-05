import React, { Component } from 'react';
import './assets/CourseThumb.scss';

class CourseThumb extends Component {
    render() {

        const { course } = this.props;

        return (

            /* ------------------------- PROJECT TAB ------------------------- */

            <div className="course-thumb">
                <div className="infos">

                    {/* Todo : remove */}
                    {/*{course.isDiplomed.state === true && (*/}
                        {/*<i class="fas fa-graduation-cap fa-2x"></i>*/}
                    {/*)}*/}

                </div>
                <div className="year">
                    <p>{course.year}</p>
                </div>
                <div className="desc">
                    <h6>{course.title}</h6>
                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus leo quis velit venenatis ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>*/}
                </div>
            </div>

        );
    }
}

export default CourseThumb;
