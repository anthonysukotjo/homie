import React from "react"
import {Col, FloatingLabel, Row, Form} from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import {Button} from "react-bootstrap";

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
<Button href="/loading"> Find My Homies</Button>
      </div>  
    ) ;
  }
  


export default Home;