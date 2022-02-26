import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button, Col} from "react-bootstrap";

const Home: NextPage = () => {
  return (

      <div>
          <div >
              <h1 style={{marginTop:"200px", fontSize:"45px" }}>WELCOME HOMIE
              </h1>
              <Col>

                  <div >
                      <Button
                          style={{marginTop:"50px", width:"100px"}}
                          href={"/login"}>

                          Login
                      </Button>
                  </div>
                  <div  >
                  <Button
                      style={{marginTop:"50px", width:"100px"}}
                      href={"/signup"}
                  >
                      Sign up
                  </Button>
              </div>
              </Col>
          </div>
      </div>



  )
}

export default Home;
