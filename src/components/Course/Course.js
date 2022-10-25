import React from 'react';

const Course = ({ course }) => {
    return (
        <div className='course-holder'>
            <div className="card bg-sky-900 shadow-xl h-100">
                <figure>
                    <img src={course.image} alt={course.name} />
                </figure>
                <div className="card-body p-4">
                    <h2 className="text-lg text-white font-bold">
                        {course.name}
                    </h2>
                    <p>
                        {course.description.length > 50 ? course.description.slice(0, 50) + '...' : course.description}
                    </p>
                    <div className="divider"></div>
                    <div className="card-actions justify-between">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;