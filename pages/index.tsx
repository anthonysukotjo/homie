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

        <div style={{ margin: "0px" }}>
            <div style={{ margin: "0px" }} >




                <Col>
                    <h1 style={{
                        marginTop: "200px", fontSize: "60px",
                        color: "#9381FF",
                    }}>WELCOME TO HOMIE
                    </h1>

                    <div>
                        <GeneralButton name="Sign In" href='/login' />
                    </div>
                    <div>
                        <GeneralButton name="Sign Up" href='/signup' />
                    </div>
                    <div>
                        <img id="house" src='house.png' alt='house' width={120} height={130} style={{ marginTop: "200px" }}
                        />
                    </div>
                </Col>

            </div>
        </div>



    )
}


export default Home;
