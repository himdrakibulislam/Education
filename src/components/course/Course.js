import React from 'react';

const Course = (props) => {
    const {name,image,price} = props.course
    return (
        <div className='col-lg-4 col-sm-6 border rounded text-center pt-2 pb-2'>
            <img className='img-fluid rounded' src={image} alt="" />
            <h3>{name}</h3>
            <p>Price : $ {price}</p>
            <button className='btn btn-outline-primary'>Enroll Course</button>
        </div>
    );
};

export default Course;