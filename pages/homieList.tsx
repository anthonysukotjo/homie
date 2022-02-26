import React, {useState,useEffect} from "react"
import {Col, FloatingLabel, Row, Form} from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import {Button} from "react-bootstrap";
import { app } from './../firebase';
import {collection, query, where, getDocs, getFirestore} from "firebase/firestore";


const Homies = () => {

    const [homieData, setHomieData] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                let tempData: any = [];
                const q = query(collection(getFirestore(app), "location"));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    let temp = doc.data();
                    tempData.push(temp);
                });
                setHomieData(tempData);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);


    return (
      <Col style={{textAlign:"center"}}> 
      <h1 style={{marginTop:"50px", fontSize:"40px"}}> Your Homies</h1>
          <h1>{JSON.stringify(homieData)}</h1>

      {/* List of Homies */}

        <div className="card "  style={{margin:"0px"}}>
          <div className="card-body">
              <h5 className="card-title">Homie Name, Email</h5>
          <p className="card-text"> destination distance: </p>
          <a href="#" className="btn btn-primary">Chat with Homie</a>
        </div>
      </div>

      <div className="card">
          <div className="card-body">
              <h5 className="card-title">Homie email</h5>
          <p className="card-text">destination distance:.</p>
          <a href="#" className="btn btn-primary">Chat with Homie</a>
        </div>
      </div>

      <div className="card ">
          <div className="card-body">
              <h5 className="card-title">Homie email</h5>
          <p className="card-text">destination distance:</p>
          <a href="#" className="btn btn-primary">Chat with Homie</a>
        </div>
      </div>
     
      <div className="card ">
          <div className="card-body">
              <h5 className="card-title">Homie email</h5>
          <p className="card-text">destination distance:</p>
          <a href="#" className="btn btn-primary">Chat with Homie</a>
        </div>
      </div>
      

      <div className="card">
          <div className="card-body">
              <h5 className="card-title">Homie email</h5>
          <p className="card-text">destination distance:</p>
          <a href="#" className="btn btn-primary">Chat with Homie</a>
        </div>
      </div>

      </Col>
    );
  }
  


export default Homies;