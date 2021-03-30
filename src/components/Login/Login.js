import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button } from 'react-bootstrap';
import logo from './logo.png';
import './Login.css';
const Login = () => {

    // initialize firebase 
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var user = result.user;
                console.log(user);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div align="center" id="login-form">
            <div className="logo">
                <img src={logo}  alt=""/>
            </div>
            <div className="col-md-4 col-md-offset-4 login p-5 border mt-5 bg-light">
                <div className="login">
                    <h3 className="login-title">Log In</h3>
                    <Button variant="primary" className="mt-3 mb-3" onClick={handleGoogleSignIn}>Login with google</Button>
                    <p>Don't have an account? <a href="/">Create an account</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;