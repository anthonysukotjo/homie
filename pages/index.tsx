import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Col } from "react-bootstrap";
import { fontGrid } from '@mui/material/styles/cssUtils';
import styled from 'styled-components';

const Home: NextPage = () => {
    return (

        <div>
            <div >
                <h1 style={{
                    marginTop: "200px", fontSize: "60px",
                }}>WELCOME TO HOMIE
                </h1>



                <Col>
                    <div >
                        <a
                            href={"/login"} >
                            <div
                                className="loginbutton"
                            >
                                Login
                            </div>
                        </a>
                    </div>

                    {/* <button className="loginbutton"
                        onclick="/login">
                        login
                    </button> */}


                    <div className='button'>
                        <a
                            href={"/signup"}>
                            <div
                                className="signupbutton"
                            >
                                Sign Up
                            </div>
                        </a>
                    </div>

                    {/* <a id="houseList" href='/login'> <img id="house" src='house.png' alt='house' width={120} height={130} style={{ marginTop: "100px" }}
                    /> </a> */}

                    <img id="house" src='house.png' alt='house' width={120} height={130} style={{ marginTop: "100px" }}
                    />

                </Col>

            </div>
        </div>



    )
}


export default Home;
