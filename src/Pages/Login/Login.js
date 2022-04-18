import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin/SocialLogin";
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    let errorLogin;
    if(error){
        errorLogin=<div>
             <p className="text-danger text-center">Error: {error.message}</p>
        </div>
    }
    const navigate = useNavigate()
    const emailRef=useRef('');
    const email = emailRef.current.value;
    const passwordRef=useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    

    const handleSubmit=event=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value; 
          signInWithEmailAndPassword(email, password);
        console.log(email,password);
    }
    if(user){
        navigate(from, { replace: true })
   }
   const resetPassword= async()=>{
    await sendPasswordResetEmail(email);
}
  return (
    <div className="container w-50">
      <h2 className="my-5 text-center">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div>
        
          <Button className="btn w-25 d-block mx-auto" variant="dark" type="submit">
            Login
          </Button>
        </div>
      </Form>
      <p className="text-center py-3">New to Fitness-Press? <Link className="text-decoration-none" to='/register'> Please Sign Up</Link></p>
      <p className="text-center" >Forget password? <Button onClick={resetPassword} variant="link" className="text-decoration-none">Reset-Password</Button> </p>
      {errorLogin}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
