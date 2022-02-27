import React from "react";
import { Col, FloatingLabel, Row, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { app } from './../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Router from "next/router";
import styled from 'styled-components';


const signUp = (
    email: string,
    password: string
) => {
    createUserWithEmailAndPassword(getAuth(app), email, password)
        .then(async (userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert(user);
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


};
const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data: { [x: string]: string }) => {
        console.log(data);
        if (!data.email.includes("@nyu.edu")) {
            alert("Only NYU students are allowed to use Homie at this point. Stay tuned!");
        }
        else if (data.password !== data.password2) {
            alert("Password don't match! Reenter password");
        }
        else {
            await signUp(data.email, data.password);

        }
    };
    return (<div>
        {/* <h1>Sign Up page</h1> */}
        <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        {...register("email")}
                        required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("password")}
                        placeholder="Enter password"
                        required

                    />
                </div>
                <div className="form-group">
                    <label>Confirm Your Password</label>
                    <input type="password"
                        className="form-control"
                        placeholder="Enter password"
                        {...register("password2")}
                        required />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>

            </Form>

        </Col>
    </div>);
}
export default SignUp;

const Button = styled.button`
  background-color: #b8b8ff;
  color: black;
  border: none
  font-family: 'Signika Negative', sans-serif;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  filter: drop-shadow(5px 5px 4px #4444dd);
`;