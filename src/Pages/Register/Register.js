import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link,  useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin/SocialLogin";

const Register = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef=useRef("")
//   const email = emailRef.current.value;
//   const password = passwordRef.current.value;
//   const name = nameRef.current.value;

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
         await createUserWithEmailAndPassword(email, password);
    
         
        
      };
      if (user) {
        navigate("/home");
      }


  return (
    <div className="container w-50">
      <h2 className="my-5 text-center">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
       
        <div>
          <Button
            className="btn button w-25 d-block mx-auto"
            variant="dark"
            type="submit"
          >
            Register
          </Button>
        </div>
      </Form>
      <p className="text-center py-3">New to Fitness-Press? <Link className="text-decoration-none" to='/login'> Please Log In</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
