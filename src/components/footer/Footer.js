import React from 'react';

const Footer = () => {
    return (
        <div className='row bg-dark text-light border rounded'>
            <div className='col-lg-5 col-sm-12 m-4'>
                <h4 className='text-primary'>E-learning</h4>
                <p>E-learning helps you to learn a lots of things as you want.It support you mentally so that you cannot feel discourage.Happy learning.E-learning always be with you</p>
                <p className='mt-4'>Terms and Conditions <span className="border-end m-3"></span>  privacy</p>
                <span className="border-bottom"></span>
            </div>
            
            <div className='col-5 m-4'>
                <h4>Fowllow us</h4>                
            </div>
            <p className='text-light m-3'>&copy; e-learning</p>
        </div>
    );
};

export default Footer;