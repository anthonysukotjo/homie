import React, {useState} from "react"
import {Col, FloatingLabel, Row, Form} from "react-bootstrap";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import TimePicker from 'react-bootstrap-time-picker';
import {Button} from "react-bootstrap";
import { app } from './../firebase';
import styled from 'styled-components';

import {doc, getFirestore, setDoc} from "firebase/firestore";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import Router from "next/router";
import fetch from 'node-fetch';
import axios from "axios";
import { margin } from "@mui/system";

// Add a new document in collection "cities"
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const mapAPIKey = process.env.GOOGLE_MAPS_API_KEY;
const saveToDB= async (
    time,
    location,
    lat,
    long
)=>{
    const email  = window.sessionStorage.getItem("homieLoginEmail")  || "no email";

    const id = email ;
    // + time.toString()
    await setDoc(doc(getFirestore(app), "location",id), {
        location: location,
        email: email,
        time: time.toString(),
        lat: lat,
        long: long,
    });

    window.sessionStorage.setItem("homieLoginLat", lat);
    window.sessionStorage.setItem("homieLoginLong", long);
    window.sessionStorage.setItem("homieLoginTime", time);
}


function Home() {
    console.log(mapAPIKey);
    const [time, setTime] = useState("12:00");
    const [location, setLocation] = useState("");

    return (
        <Col 
        xs={100}
        // style={{width:"10px"}}
        >
      <div className="main">
    
        <h1 style = {styleObj}>Go Home with my Homies</h1>
    

  {/* need tp connect to google map api */}
  <div style={{
    width:"350px",
    marginRight:"auto",
    marginLeft:"auto"

}
    }>
          <label style={stylePass}>Enter your destination </label>
          <GooglePlacesAutocomplete
              // apiKey = {mapAPIKey}
              selectProps={{

                  onChange: (l)=> {
                      setLocation(l.label);
                      console.log("you selected");
                      console.log(location);
                  },
              }}
          />
    </div>
<label style={stylePass}>
    Select time you want to leave
</label>
<div style={{
    width:"350px",
    marginRight:"auto",
    marginLeft:"auto"

}
    }>
<TimePicker
              onChange = {setTime
                  // (v) => {
                  //     alert('New time is: ' + new Date(v));
                  //     setTime(v);
                  // }

              }
              // onChange={(a) => {
              //   (value) => alert('New time is: ', value)
              //     console.log("current time");
              //     console.log(a);
              //     console.log(time);
              // }}
              value={time}
              step={15}
          />
          </div>
          
{/* the styling of this button can be same as login and signup from index page */}
<Button 
    style = {findButton}
    onClick = {async()=>{
        if (location == "")
            alert("Please select a location!");
        else {

            const splitAddress = location.split(' ').join('+');
            const url = "https://maps.googleapis.com/maps/api/geocode/json?address="
                + splitAddress +
                "&key=AIzaSyAOPXPtW9ZSRH_F5tliPUID9Ph2mXi97Kg";

            const response = await axios.get(url);

            console.log("hello!!");
            const data : any = await response.data["results"][0]["geometry"]["location"];
            console.log(JSON.stringify(data));
            console.log("hello!! ans pls");
            // console.log(data["results"][0]["geometry"]["location"]);


            console.log(location);
            console.log(time);
            console.log(data.lat);
            const lat = data["lat"];
            const long = data["lng"];

            // const lat = 10;
            // const long = 10;
           await saveToDB(time,location , lat , long);
           await Router.push("/homieList");


        }
    }}
> Find My Homies</Button>
      </div>  
      </Col>
    ) ;
  }
  


export default Home;
const findButton= {
    width: '350px',
    height: '50px',
    background: '#B8B8FF',
    border: 'none',
    fontFamily: "Signika Negative, sans-serif",
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    borderRadius: '10px',
    textTransform: 'uppercase',
    textAlign: "center",
    color: 'black',
    marginTop: "30px",
    outline: 'none',
    boxShadow: "5px 5px 4px #4444DD",
} as React.CSSProperties;

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
    color: "black",
    fontFamily: "Signika Negative",
}

const styleFloat = {
    fontSize: 20,
    paddingTop: "10px",
    paddingBottom: "10px",
    fontFamily: "Signika Negative",
}