import React from "react"
import {Col, FloatingLabel, Row, Form} from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import {Button} from "react-bootstrap";
import { app } from './../firebase';

import {doc, getFirestore, setDoc} from "firebase/firestore";

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


const saveToDB= async (str)=>{
    await setDoc(doc(getFirestore(app), "location",makeid(20)), {
        location: [40.7293925, -73.9971303],
        email: "baby@nyu.edu",
        time: "ladsj"
    });
}


function Home() {


    return (
      <div className="main">
    
        <h1>Go Home with my Homies</h1>
    

  {/* need tp connect to google map api */}
<form> 
<div className="form-group">
        <label>Enter your destination </label>
         <input type="string" className="form-control" placeholder="Destination" />
        </div>
        <div className="search">
          {}
         </div>
 </form>     
 
<label style={{ color: "black"}}>
    Select time you are leaving
</label>

<TimePicker start="0:00" end="24:00" step={15} />

{/* the styling of this button can be same as login and signup from index page */}
<Button
    onClick = {async()=>{
        await saveToDB("test");
        alert("btn working");
    }}
> Find My Homies</Button>
      </div>  
    ) ;
  }
  


export default Home;