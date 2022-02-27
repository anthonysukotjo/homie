import React, { FunctionComponent } from "react"
import { Col, FloatingLabel, Row, Form } from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import { Button } from "react-bootstrap";

const homieButton = {

  width: '200px',
  height: '36px',
  /* button gradient */

  // background: 'linear-gradient(#B8B8FF, #9381FF)',
  background: '#B8B8FF',
  border: 'none',
  fontFamily: "Signika Negative, sans-serif",
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '15px',
  borderRadius: '10px',
  textTransform: 'uppercase',
  textAlign: "center",
  color: 'black',
  marginTop: "10px",
  outline: 'none',
  boxShadow: "5px 5px 4px #4444DD"
  // border: "30px"

} as React.CSSProperties;

const HomieCard: FunctionComponent<{
  email: string,
  distance: string
}> = props => {
  return (

    <div className="card " style={{ margin: "15px", borderRadius: '10px' }}>
      <div className="card-body">
        <h5 className="card-title">{props.email}</h5>
        <p className="card-text"> destination distance from yours: {props.distance} </p>
        <a href="#" className="btn btn-primary" style={homieButton}>     Chat with Homie</a>
      </div>
    </div>
  );
}

export default HomieCard;