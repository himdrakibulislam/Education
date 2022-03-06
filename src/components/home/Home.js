import React, { useEffect } from 'react';
import {useState} from 'react'
import Catagory from '../catagory/Catagory';
const Home = () => {
    const [catagory,setCatagory] = useState([]);
    useEffect(()=>{
        fetch('https://himdrakibulislam.github.io/jsonfile/catagory.json')
        .then(res => res.json())
        .then(data => setCatagory(data))
    },[])
    return (
        <div>
            <h1 className='text-center'>Course Catagories</h1>
            <div className='row'>
                {
                    catagory.map(ct => <Catagory 
                        key={ct.id}
                        ct={ct}></Catagory>)
                }
            </div>
            
        </div>
    );
};

export default Home;