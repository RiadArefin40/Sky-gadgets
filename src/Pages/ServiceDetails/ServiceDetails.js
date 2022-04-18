import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()

    return (
        <div>
            <p>Service Details{serviceId}</p>
        </div>
    );
};

export default ServiceDetails;