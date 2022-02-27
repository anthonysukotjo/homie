import React, {useState} from "react"
import {Col, FloatingLabel, Row, Form} from "react-bootstrap";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import TimePicker from 'react-bootstrap-time-picker';
import {Button} from "react-bootstrap";
import { app } from './../firebase';

import {doc, getFirestore, setDoc} from "firebase/firestore";
import DropdownMenu from "react-bootstrap/DropdownMenu";

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
const saveToDB= async (time, location)=>{
    const email  = window.sessionStorage.getItem("homieLoginEmail")  || "no email";
    await setDoc(doc(getFirestore(app), "location",makeid(20)), {
        location: location,
        email: email,
        time: time.toString()
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
            console.log(location);
            console.log(time);
           await saveToDB(time,location);
        }
    }}
> Find My Homies</Button>
      </div>  
    ) ;
  }
  


export default Home;