import React from 'react'
import {Container} from "@material-ui/core";
import image from "../components/img/bg.jpg";



export const Succesful = () => (
  <Container style={{ marginTop:'20%',textAlign:'center',color:'white',backgroundImage:`url(${image})`}}>
    <h1>Thanks For Review!  </h1>
  </Container>
)
