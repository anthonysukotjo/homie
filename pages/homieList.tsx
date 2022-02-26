import React, {useState,useEffect} from "react"
import {Col, FloatingLabel, Row, Form} from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import {Button} from "react-bootstrap";
import { app } from './../firebase';
import {collection, query, where, getDocs, getFirestore} from "firebase/firestore";
import HomieCard from "../components/homieCard";



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

     <HomieCard email="123@nyu.edu" distance="10"/> 
     <HomieCard email="email@nyu.edu" distance="14"/> 
     <HomieCard email="abc@nyu.edu" distance="20"/> 
     <HomieCard email="abc789@nyu.edu" distance="22"/> 

      </Col>
    );
  }
  


export default Homies;