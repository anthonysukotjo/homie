import React, { FunctionComponent } from "react"
import {Col, FloatingLabel, Row, Form} from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import {Button} from "react-bootstrap";

const HomieCard:FunctionComponent<{
    email: string,
    distance:string
}>= props=>  {
    return (

        <div className="card "  style={{margin:"15px"}}>
          <div className="card-body">
              <h5 className="card-title">{props.email}</h5>           
          <p className="card-text"> destination distance from yours: {props.distance} </p>
          <a href="#" className="btn btn-primary">Chat with Homie</a>
        </div>
      </div>
    );
}

export default HomieCard;