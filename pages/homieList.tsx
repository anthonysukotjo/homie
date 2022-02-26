import React from "react"
import {Col, FloatingLabel, Row, Form} from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import {Button} from "react-bootstrap";

function Homies() {


    return (
      <Col style={{textAlign:"center"}}> 
      <h1 style={{marginTop:"50px", fontSize:"40px"}}> Your Homies</h1>

      {/* List of Homies */}

        <div className="card "  style={{margin:"0px"}}>
          <div className="card-body">
              <h5 className="card-title">Homie Name, Email</h5>
          <p className="card-text"> destination distance: </p>
          <a href="#" className="btn btn-primary">Chat with Homie</a>
        </div>
      </div>

      <div className="card">
          <div className="card-body">
              <h5 className="card-title">Homie email</h5>
          <p className="card-text">destination distance:.</p>
          <a href="#" className="btn btn-primary">Chat with Homie</a>
        </div>
      </div>

      <div className="card ">
          <div className="card-body">
              <h5 className="card-title">Homie email</h5>
          <p className="card-text">destination distance:</p>
          <a href="#" className="btn btn-primary">Chat with Homie</a>
        </div>
      </div>
     
      <div className="card ">
          <div className="card-body">
              <h5 className="card-title">Homie email</h5>
          <p className="card-text">destination distance:</p>
          <a href="#" className="btn btn-primary">Chat with Homie</a>
        </div>
      </div>
      

      <div className="card">
          <div className="card-body">
              <h5 className="card-title">Homie email</h5>
          <p className="card-text">destination distance:</p>
          <a href="#" className="btn btn-primary">Chat with Homie</a>
        </div>
      </div>

      </Col>
    );
  }
  


export default Homies;