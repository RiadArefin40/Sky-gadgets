import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ConfirmBooking = () => {
    return (
        <div>
            <div className="container w-50">
               
      <h2 className="my-5 text-center">Congratulations !Please confirm your adress</h2>
      <Form >
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Billing Adress</Form.Label>
          <Form.Control  type="text" placeholder="Enter adress" required />
        </Form.Group>

       
       
        <div>
          <Button
            className="btn button w-50 d-block my-5 mx-auto"
            variant="dark"
            type="submit"
          >
            Confirm Booking
          </Button>
        </div>
      </Form>
      
    </div>
        </div>
    );
};

export default ConfirmBooking;