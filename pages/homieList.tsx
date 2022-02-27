import React, {useState,useEffect} from "react"
import {Col, FloatingLabel, Row, Form, Spinner} from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import {Button} from "react-bootstrap";
import { app } from './../firebase';
import {collection, query, where, getDocs, getFirestore} from "firebase/firestore";
import HomieCard from "../components/homieCard";
import GeneralButton from "../components/button";

const HomieCards = ({
                                        data,
                                        email
                                        // instructionMode,
                                        // classUnits,
                                    }) => {
    console.log("building...");
    let elements: JSX.Element[] = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].email == email) continue;
        elements.push(<HomieCard email= {data[i].email} distance = {data[i].location} time={data[i].time}/>);
    }
    return <div>{elements}</div>;
};

const Homies = () => {

    const [homieData, setHomieData] = useState(
        {loading: false,
                    data: []
                });

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
                setHomieData({
                    loading: true,
                    data : tempData});
                console.log("HOMIE DATA")
                console.log(homieData);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);


  return (
    <Col style={{ textAlign: "center" }}>
      <h1 style={{ marginTop: "50px", fontSize: "40px", color: "#9381ff", fontWeight: "bold" }}> Your Homies</h1>

      {/* List of Homies */}

          {homieData.loading ? (
                  <HomieCards
                      data ={homieData.data}
                      email={window.sessionStorage.getItem("homieLoginEmail")}
                  />

          ) :   <Spinner animation="border" /> }

          </Col> );
          }


export default Homies;