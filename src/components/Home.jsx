import React from "react";
import { AppBar, CssBaseline, Typography } from "@material-ui/core";

import image from "../components/img/cr.jpg";
import Mid from "./Mid";
import Midsection from "./Midsection";
import Header from "./Header";
import Footer from "./Footer";



const Home = () => {
  


  
  return (
    <>
    
    <div>
    <Header />
      <AppBar
        position="static"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          width:'110%',
         backgroundSize: "cover",
          backgroundAttachment: "fixed",
          // opacity: "0.6",
        }}
      >
       
        <CssBaseline />
 
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            marginTop: "70px",
            marginBottom: "30px",
            color: "Black",
          }}
        >
          WELCOME TO THE HASTCRAFTED
        </Typography>

        <Typography
          variant="h3"
          style={{ textAlign: "center", marginBottom: "10%", color: "black" }}
        >
          Let's Bring the Joy to your Home
        </Typography>
      </AppBar>
      <Mid />
      <Midsection />

<Footer/>
 
    </div>

    </>
  );
};

export default Home;
