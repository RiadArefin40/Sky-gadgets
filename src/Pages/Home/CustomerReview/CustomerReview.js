import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import './CustomerRivew.css';
import img1 from '../../../Assets/images/expert-1.jpg';
import img2 from '../../../Assets/images/expert-2.jpg';


const CustomerReview = () => {
  return (
    <div className="customer-review text-center">
        <h1 className="py-5 ">What our customers say
        </h1 >
         
     
        <CardGroup className="py-5" >
         
          <Card className="m-5 card-details ">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Mr. Abraham Linkon</Card.Title>
              <Card.Text>
               I got my healthy and fit life from Fitness-press.
              </Card.Text>
              <p>Ratings : 5</p>
            </Card.Body>
            
          </Card>
          <Card className="m-5 card-details">
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Mr.John Nabisko</Card.Title>
              <Card.Text>
                If you want to be healthy fitness-press can be a good option
              </Card.Text>
              <p>Ratings : 4.8</p>
            </Card.Body>
            
          </Card>
          
        </CardGroup>
        
      
  
    </div>
  );
};

export default CustomerReview;
