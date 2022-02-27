import React from "react"
import { Col, FloatingLabel, Row, Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { app } from './../firebase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Router from "next/router";

const signIn = async (email: string, password: string) => {


    signInWithEmailAndPassword(getAuth(app), email, password)
        .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            window.sessionStorage.setItem("homieLoginEmail", email);
            await Router.push('/home');

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });


}
const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data: { [x: string]: string }) => {
        console.log("logging in...");
        console.log(data);
        await signIn(data.email, data.password);
    };
    return (<div>
        {/* <h1>login page</h1> */}
        <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        {...register("email")}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        {...register("password")}
                        required />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                {/*<p className="forgot-password text-right">*/}
                {/*    Forgot <a href="#">password?</a>*/}
                {/*</p>*/}
            </Form>

        </Col>
    </div>);
}
export default Login;