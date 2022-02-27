import React, {useState,useEffect} from "react"
import {Col, FloatingLabel, Row, Form, Spinner} from "react-bootstrap";
import TimePicker from 'react-bootstrap-time-picker';
import {Button} from "react-bootstrap";
import { app } from './../firebase';
import {collection, query, where, getDocs, getFirestore} from "firebase/firestore";
import HomieCard from "../components/homieCard";
import GeneralButton from "../components/button";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2-lat1);  // deg2rad below
    let dLon = deg2rad(lon2-lon1);
    let a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in km
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}


const HomieCards = ({data, email}) => {

    console.log("building...");
    let elements: JSX.Element[] = [];
    let parsedDateWithDistance: {
        email:string,
        location : string,
        time : string,
        distance: number
    }[] = [];
    const localLat  = window.sessionStorage.getItem("homieLoginLat") || 0;
    const localLng  = window.sessionStorage.getItem("homieLoginLong") || 0;
    const localTime = window.sessionStorage.getItem("homieLoginTime") || "0";


    console.log("local coordiates");
    console.log(localLat);
    console.log(localLng);

    for (let i = 0; i < data.length; i++) {
        if (data[i].email == email) continue;
        const distance = getDistanceFromLatLonInKm(localLat,localLng, data[i].lat,data[i].long);
        const ourHours = Math.floor(   parseInt(localTime) / (3600));
        const theirHours = Math.floor(   parseInt(data[i].time) / (3600));

        if (!(ourHours % 24 + 1 > theirHours || ourHours % 24  -  1 < theirHours)) continue;
        const obj = {
            email: data[i].email,
            location : data[i].location,
            time : data[i].time,
            distance: distance,
        }
        console.log(obj);
       parsedDateWithDistance.push(obj);
    }

    parsedDateWithDistance.sort((a, b) => (a.distance > b.distance) ? 1 : -1);
    const minLength = Math.min(parsedDateWithDistance.length, 4 )
    for (let i = 0; i < minLength; i++) {
        elements.push(<HomieCard
            email= {data[i].email}
            distance={parsedDateWithDistance[i].distance.toString()}
            time={data[i].time}
            lat ={data[i].lat}
            long={data[i].long}
        />);
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
    <Col style={{ textAlign: "center", marginBottom:"30px"  }}>
      <h1 style={{
          marginTop: "50px",
          fontSize: "40px",
          color: "#9381ff",
          fontWeight: "bold",
      }}> Your Homies</h1>

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