import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({service}) => {
    const {name,img,id,price}=service;
    const navigate = useNavigate();
    const navigateToService=id=>{
        navigate(`/service/${id}`)
    }

  return (
    <div className="px-2">
      <Col className="m-2">
        <Card className="">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-center">{name}</Card.Title>
            <h5 className="text-center text-danger">Price : ${price}</h5>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              
            </Card.Text>
            <button onClick={()=>navigateToService(id)}  className='btn btn-dark w-100 button'>Book Now</button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
