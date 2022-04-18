import React from 'react';
import image from '../../Assets/images/profile.png'
import './About.css'

const About = () => {
    return (
        <div className='container about-me my-5 py-5 '>
            <div className='text-center'>
            <h1>Riad Arefin Likhon</h1>
            
            <img  className='py-5' src={image} alt="" />
            <h5>Junior Mern-stact webdeveloper</h5>
            </div>
            <div className='aboutme-details'>
              <p>Hello Everyone, Assalamualaikum. I'm Riad Arefin Likhon. Studying  BSC in CSE.  Alhamdulillah I'm also a student of programming-hero web-developments Batch-5. Luckily I got inrolled in this course . <br /> Recently after completing basic html, css,javascript and doing some projects I started learning React js. I also learned basic about firebase authentication system. My recent target is to finish this course ontime and want to go in SCIC.  In the future I will try to be a experience fullstack developer.</p>
            </div>
           
        </div>
    );
};

export default About;