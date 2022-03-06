import React, { useEffect, useState } from 'react';
import Course from '../course/Course';

const Courses = () => {
    const [courses,setCourse] = useState([]);
    useEffect(()=>{
        fetch('https://himdrakibulislam.github.io/jsonfile/course.json')
        .then(res =>res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div>
            <h1 className='text-center'>Course</h1>
           <div className="row">
           {
               courses.map(course => <Course 
                key={course.id}
                course={course}></Course> )
            }
           </div>
        </div>
    );
};

export default Courses;