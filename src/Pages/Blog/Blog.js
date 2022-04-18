import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <div className='blog'>
                <h3> Difference between authorization and authentication?</h3>
                <p>Authentication verifies who is the user. Authorization determines what resources a user can access.  
                Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authorization works through settings that are implemented and maintained by the organization.</p>
            </div>
            <div className='blog'>
            <h3> Why are you using firebase? </h3>
            <p>We can use this service for athentication. Firebase is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web . With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others</p>
            
            <h3>What other options do you have to implement authentication?</h3>
            <p>There are many other option that we can implement for authentication. Here are some options:</p>
            <ul>
                <li>Biometric authentication</li>
                <li>Voice Authentication</li>
                <li>Token authentication</li>
                <li>Two-factor authentication (2FA)</li>
                <li>Computer recognition authentication</li>
            </ul>
            <p></p>
            </div>
            <div className='blog'>
                <h3> What are the  other services does firebase provide other than authentication?</h3>
                <h5>Storage</h5>
                <p>Google Firebase uses dedicated cloud-based NoSQL databases, Firestore, and a real-time database, to store information. Like other NoSQL databases, they save information in collections and documents.</p>
                <h5>Hosting</h5>
                <p>You can also host your web app easily on Firebase. Offering microservices, Firebase lets you host and deploy your web app rapidly with a few commands.</p>
                <h5>Built-in push notification</h5>
                <p>Coding and implementing push notifications can be arduous. Firebase's built-in push notification lets you add personalized and real-time alert capabilities to your app without writing a separate script from scratch.</p>
            </div>

        </div>
    );
};

export default Blog;