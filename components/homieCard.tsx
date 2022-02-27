import React, { FunctionComponent } from "react"
import {Col, FloatingLabel, Row, Form} from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import {Button} from "react-bootstrap";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 40.721120,
    lng: -73.981450
};

const HomieCard:FunctionComponent<{
    email: string,
    distance:string,
    time: string
}>= props=>  {
    const timeInInt = parseInt(props.time);
    const hours = Math.floor( timeInInt / (3600));
    const minutes =Math.floor((timeInInt%3600)/60);
    const hoursString = hours < 10 ? "0" + hours : hours.toString();
    const minutesString = minutes < 10 ? "0" + minutes : minutes.toString();
    const parsedTime = hoursString + ":" + minutesString;
    //
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey:"AIzaSyAOPXPtW9ZSRH_F5tliPUID9Ph2mXi97Kg"
    // })
    //
    // const [map, setMap] = React.useState(null)
    //
    // const onLoad = React.useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds();
    //     map.fitBounds(bounds);
    //     setMap(map)
    // }, [])
    //
    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])
    //
    // {
    //     isLoaded ? (
    //         <GoogleMap
    //             mapContainerStyle={containerStyle}
    //             center={center}
    //             zoom={10}
    //             onLoad={onLoad}
    //             onUnmount={onUnmount}
    //         >
    //             { /* Child components, such as markers, info windows, etc. */ }
    //             <></>
    //         </GoogleMap>
    //     ) : <></>
    // }




    return (

        <div className="card "  style={{margin:"15px"}}>
          <div className="card-body">
              <h5 className="card-title">{props.email}</h5>
              <h5 className="card-title">I want to leave at {parsedTime}</h5>
              <p className="card-text"> I want to go to {props.distance} </p>
          <a href={"mailto:" + props.email} className="btn btn-primary">Chat with Homie</a>


          </div>
      </div>
    );
}

export default HomieCard;