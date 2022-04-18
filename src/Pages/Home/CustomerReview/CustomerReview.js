import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import './CustomerRivew.css'

const CustomerReview = () => {
  return (
    <div className="customer-review text-center">
        <h1 className="py-5 ">What our customers say
        </h1 >
         
     
        <CardGroup className="py-5" >
         
          <Card className="m-5 ">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
            
          </Card>
          <Card className="m-5 ">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. 
              </Card.Text>
            </Card.Body>
            
          </Card>
          
        </CardGroup>
        
      
  
    </div>
  );
};

export default CustomerReview;
