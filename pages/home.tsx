import React, {useState} from "react"
import {Col, FloatingLabel, Row, Form} from "react-bootstrap";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import TimePicker from 'react-bootstrap-time-picker';
import {Button} from "react-bootstrap";
import { app } from './../firebase';

import {doc, getFirestore, setDoc} from "firebase/firestore";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import Router from "next/router";
import fetch from 'node-fetch';
import axios from "axios";

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
}


function Home() {
    console.log(mapAPIKey);
    const [time, setTime] = useState("12:00");
    const [location, setLocation] = useState("");

    return (
      <div className="main">
    
        <h1>Go Home with my Homies</h1>
    

  {/* need tp connect to google map api */}
          <label>Enter your destination </label>
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
 
<label style={{ color: "black"}}>
    Select time you are leaving
</label>
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
{/* the styling of this button can be same as login and signup from index page */}
<Button
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
    ) ;
  }
  


export default Home;