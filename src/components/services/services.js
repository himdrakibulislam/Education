import { faBriefcaseMedical, faToolbox, faVial } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Services = () => {
    const medical = <FontAwesomeIcon icon={faBriefcaseMedical}/>
    const tolbox = <FontAwesomeIcon icon={faToolbox}/>
    const science = <FontAwesomeIcon icon={faVial}/>
    return (
        <div>
            <h1 className='text-center'>Our Services</h1>
            <div className="row">
                <div className="col-lg-4 text-center border rounded">
                    <h1>
                        {
                            medical
                        }
                    </h1>
                    <h3>Medical Course</h3>
                </div>
                <div className="col-lg-4 text-center border rounded">
                    <h1>{tolbox}</h1>
                    <h3>Mechanical Course</h3>
                </div>
                <div className="col-lg-4 text-center border rounded">
                    <h1>{science}</h1>
                    <h3>Science Related Course</h3>
                </div>
            </div>
        </div>
    );
};

export default Services;