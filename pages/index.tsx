import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Col } from "react-bootstrap";

const Home: NextPage = () => {
    return (

        <div>
            <div >
                <h1 style={{ marginTop: "200px", fontSize: "45px" }}>WELCOME HOMIE
                </h1>
                <Col>

                    <div >
                        <a
                            href={"/login"}>
                            <div


                                className="loginbutton"
                            >

                                Login




                            </div>
                        </a>
                    </div>




                    <div  >
                        <Button
                            style={{ marginTop: "50px", width: "180px" }}
                            href={"/signup"}
                        >
                            Sign up
                        </Button>
                    </div>

                    <div id='house_icon'>
                        <img id="house" src='house.png' alt='house' width={120} height={130} style={{ marginTop: "100px" }}
                        />



                    </div>


                </Col>
            </div>
        </div>



    )
}

export default Home;
