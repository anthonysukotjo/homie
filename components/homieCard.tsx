import React, {FunctionComponent, useEffect, useState} from "react"
import { Col, FloatingLabel, Row, Form } from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import {Button} from "react-bootstrap";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {collection, getDocs, getFirestore, query} from "firebase/firestore";
import {app} from "../firebase";

const containerStyle = {
    width: '300px',
    height: '150px',
    marginRight:"auto",
    marginLeft:"auto",
    marginBottom:"20px"
};



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
    marginBottom:"20px",
  outline: 'none',
  boxShadow: "5px 5px 4px #4444DD"

} as React.CSSProperties;

const HomieCard:FunctionComponent<{
    email: string,
    distance:string,
    time: string,
    lat: number,
    long: number,
}>= props=>  {
    useEffect(() => {
        (async () => {
            await new Promise(resolve => setTimeout(resolve, 100));
            setisLoadedLoaded(true);
        })();
    }, []);

    const timeInInt = parseInt(props.time);
    const hours   = Math.floor( timeInInt / (3600));
    const minutes = Math.floor((timeInInt%3600)/60);

    const hoursString = hours < 10 ? "0" + hours : hours.toString();
    const minutesString = minutes < 10 ? "0" + minutes : minutes.toString();
    const parsedTime = hoursString + ":" + minutesString;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey:"AIzaSyAOPXPtW9ZSRH_F5tliPUID9Ph2mXi97Kg"
    })

    const [isLoadedLoaded, setisLoadedLoaded] = useState(false);
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const center = {
        lat: props.lat,
        lng: props.long
    };

    console.log("center", center);
    const distInMiles =    ( parseInt(props.distance)*0.62137 ).toFixed(2);

    return (


        <div className="card "  style={{margin:"15px"}}>
          <div className="card-body">
              <h5 className="card-title">{props.email}</h5>
              <h5 className="card-title">I want to leave at {parsedTime}</h5>
              <p className="card-text"> My destination is {distInMiles} miles away! </p>
              {
                  isLoaded && isLoadedLoaded ? (
                      <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={center}
                          zoom={10}
                          onLoad={onLoad}
                          onUnmount={onUnmount}
                      >
                          { /* Child components, such as markers, info windows, etc. */ }
                          <></>
                      </GoogleMap>
                  ) : <></>
              }
          <a style={cardstyle} href={"mailto:" + props.email} className="btn btn-primary">Connect with Homie</a>

        </div>
      </div>
  );
}

export default HomieCard;