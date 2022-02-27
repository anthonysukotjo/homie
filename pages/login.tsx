import { borderLeft, fontFamily } from "@mui/system";
import React, { FunctionComponent } from "react"
import {Col, FloatingLabel, Row, Form} from "react-bootstrap";
import styled from 'styled-components';

const Login = ()=>{
    return (<div style={{display: "flex", alignItems: "center", justifyContent: "center",}}>
        {/* <h1>login page</h1> */}
        <Col xs={5}>
            <Form>
                <h3 style={styleObj}>Sign In</h3>
                <div className="form-group">
                    {/* <label>Email address</label> */}
                    <input type="email" className="form-control" placeholder="Enter email" style={styleFloat}/>
                </div>
                <div className="form-group">
                    <label></label>
                    <input type="password" className="form-control" placeholder="Enter password" style={styleFloat}/>
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" style = {stylePass} htmlFor="customCheck1"> Remember me</label>
                    </div>
                </div>
                {/* <button type="submit" className="btn btn-primary btn-block">Submit</button> */}
                <div><Button> Submit</Button></div>
                {/* <p className="forgot-password text-right" style={stylePass}>
                    Forgot <a href="#">password?</a>
                </p> */}
            </Form>

        </Col>
    </div>);
}
export default Login;

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

const styleFloat= {
    fontSize: 20,
    paddingTop: "10px",
    paddingBottom: "10px",
    fontFamily: "Signika Negative",
}