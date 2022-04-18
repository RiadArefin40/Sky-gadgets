import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect( ()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    console.log(services)
    return (
        <div className='service-section'>
            <div className='container  container-class '>
            <h1 className='text-center  p-5'>My  Services</h1>
            <Row xs={1} md={2} lg={3} className="g-2 mx-5">
            {
                services.map(service=><Service key={service.id} service={service}></Service>)
            }
            </Row>
            <h2  className='text-center  p-5'>Be Healthy Be Happy</h2>
        </div>
        </div>
        
    );
};

export default Services;