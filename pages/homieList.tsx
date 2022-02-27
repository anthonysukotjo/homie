import React from "react"
import { Col, FloatingLabel, Row, Form } from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import { Button } from "react-bootstrap";
import HomieCard from "../components/homieCard";
import GeneralButton from "../components/button";

function Homies() {


  return (
    <Col style={{ textAlign: "center" }}>
      <h1 style={{ marginTop: "50px", fontSize: "40px", color: "#9381ff" }}> Your Homies</h1>

      {/* List of Homies */}

      <HomieCard email="123@nyu.edu" distance="10" />
      <HomieCard email="email@nyu.edu" distance="14" />
      <HomieCard email="abc@nyu.edu" distance="20" />
      <HomieCard email="abc789@nyu.edu" distance="22" />

    </Col>
  );
}



export default Homies;