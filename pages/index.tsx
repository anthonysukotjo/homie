import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Col } from "react-bootstrap";
import { fontGrid } from '@mui/material/styles/cssUtils';
import styled from 'styled-components';
import StepButton from '../components/stepButton';
import GeneralButton from '../components/button';
import { stepButtonClasses } from '@mui/material';

const Home: NextPage = () => {
    return (

        <div>
            <div >
                <h1 style={{
                    paddingTop: "200px",
                    fontSize: "60px",
                    color: "#9381FF",
                    fontWeight: "bold",
                    fontFamily: 'Signika Negative, sans-serif',
                }}>WELCOME TO HOMIE
                </h1>



                <Col>
                    {/* <div >
                        <a
                            href={"/login"} >
                            <div
                                className="loginbutton"
                            >
                                Login
                            </div>
                        </a>
                    </div> */}

                    {/* <button className="loginbutton"
                        onclick="/login">
                        login
                    </button> */}


                    {/* <div className='button'>
                        <a
                            href={"/signup"}>
                            <div
                                className="signupbutton"
                            >
                                Sign Up
                            </div>
                        </a>
                    </div> */}

                    {/* <a id="houseList" href='/login'> <img id="house" src='house.png' alt='house' width={120} height={130} style={{ marginTop: "100px" }}
                    /> </a> */}



                    {/* <StepButton name="Login" /> */}

                    <div>
                        <GeneralButton name="Sign In" href='/login' />
                    </div>
                    <div>
                        <GeneralButton name="Sign Up" href='/signup' />
                    </div>
                    <div>
                        <img id="house" src='house.png' alt='house' width={120} height={130} style={{ marginTop: "80px" }}
                        />
                    </div>
                </Col>

            </div>
        </div>



    )
}


export default Home;
