import React, { FunctionComponent } from "react"
import { Col, FloatingLabel, Row, Form } from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import { Button } from "react-bootstrap";

const cardstyle = {

  width: '200px',
  height: '36px',
  background: '#B8B8FF',
  border: 'none',
  fontFamily: "Signika Negative, sans-serif",
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '15px',
  borderRadius: '10px',
  textTransform: 'uppercase',
  textAlign: "center",
  color: 'black',
  marginTop: "10px",
  outline: 'none',
  boxShadow: "5px 5px 4px #4444DD"

} as React.CSSProperties;

const HomieCard:FunctionComponent<{
    email: string,
    distance:string,
    time: string
}>= props=>  {
    const timeInInt = parseInt(props.time);
    const hours = Math.floor( timeInInt / (3600));
    const minutes =(timeInInt%3600)/60;
    const hoursString = hours < 10 ? "0" + hours : hours.toString();
    const minutesString = minutes < 10 ? "0" + minutes : minutes.toString();
    const parsedTime = hoursString + ":" + minutesString;
    return (

        <div className="card "  style={{margin:"15px"}}>
          <div className="card-body">
              <h5 className="card-title">{props.email}</h5>
              <h5 className="card-title">I want to leave at {parsedTime}</h5>
              <p className="card-text"> I want to go to {props.distance} </p>
          <a style={cardstyle} href={"mailto:" + props.email} className="btn btn-primary">Chat with Homie</a>
        </div>
      </div>
    //</div>
  );
}

export default HomieCard;