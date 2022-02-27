import React from "react";
import { Col, FloatingLabel, Row, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { app } from './../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Router from "next/router";
import styled from 'styled-components';

const SignUp = () => {
    return (<div style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
        {/* <h1>Sign Up page</h1> */}
        <Col xs={100}>
            <Form>
                <h3 style={styleObj}>Sign Up</h3>
                <div className="form-group">
                    {/* <label>Email address</label> */}
                    <input type="email" className="form-control" placeholder="Enter email" style={styleFloat} />
                </div>
                <div className="form-group">
                    {/* <label>Password</label> */}
                    <label></label>
                    <input type="password" className="form-control" placeholder="Enter password" style={styleFloat} />
                </div>
                <div className="form-group">
                    {/* <label>Confirm Your Password</label> */}
                    <label></label>
                    <input type="password" className="form-control" placeholder="Enter password" style={styleFloat} />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" style={stylePass} htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div><Button> Submit</Button></div>
                {/* <button type="submit" className="btn btn-primary btn-block">Submit</button> */}

            </Form>

        </Col>
    </div>);
}
export default SignUp;

const Button = styled.button`
  background-color: #b8b8ff;
  border: none;
  color: black;
  height: 60px;
  width: 250px;
  font-family: 'Signika Negative', sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  filter: drop-shadow(5px 5px 4px #4444dd);
`;

const styleObj = {
    fontSize: 40,
    color: "#9381ff",
    paddingTop: "100px",
    paddingBottom: "20px",
    fontFamily: "Signika Negative",
    fontWeight: "bold",
}

const stylePass = {
    fontSize: 15,
    color: "#9381ff",

    fontFamily: "Signika Negative",
    marginLeft: "5px",
}

const styleFloat = {
    fontSize: 20,
    paddingTop: "10px",
    paddingBottom: "10px",
    fontFamily: "Signika Negative",
}