import React from 'react';

const Sidebar = ({ course }) => {
    return (
        <div>
            <li>
                {
                    course.category
                }
            </li>
        </div>
    );
};

export default Sidebar;