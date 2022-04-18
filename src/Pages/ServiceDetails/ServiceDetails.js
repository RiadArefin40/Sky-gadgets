import React from 'react';
import { useParams } from 'react-router-dom';
import ConfirmBooking from '../ConfirmBooking/ConfirmBooking';

const ServiceDetails = () => {
    const {serviceId} = useParams()

    return (
        <div className='container'>
            <h1 className='text-center my-3'>Your selected service ID {serviceId}</h1>
            <ConfirmBooking></ConfirmBooking>
        </div>
    );
};

export default ServiceDetails;