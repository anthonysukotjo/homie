import React from "react";
import {Col, FloatingLabel, Row, Form} from "react-bootstrap";
import styled from 'styled-components';

const SignUp = ()=>{
    return (<div>
        {/* <h1>Sign Up page</h1> */}
        <Col>
            <Form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Confirm Your Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
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