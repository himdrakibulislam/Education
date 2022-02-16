import React from 'react';

const Catagory = (props) => {
    const {ct,image} = props.ct
    return (
        <div className='col-lg-4 col-sm-4 col-md-6 border rounded'>
            <div >
                <img className='img-fluid rounded mt-2' src={image} height='200' width='400' alt="" />
                <h3 className='text-center'>{ct}</h3>
            </div>
        </div>
    );
};

export default Catagory;