import React from "react";
import { Container } from "@material-ui/core";
import image from "../components/img/gift.jpg";
import { Button, Box, Typography } from "@mui/material";
import Features from "./Features";


const Midsection = () => {
  return (

    <Container>

      <Button sx={{ marginBottom: "20px", color: "black" }}>OUR STORY</Button>
      <Typography variant="h3" style={{ marginBottom: "2%", color: "black" }}>
        For the people,who love Handmade Items
      </Typography>
      <Typography>
      
        " Homemade means something was made at home. It is sometimes spelled
        'home-made'. Each is unique and specially made, thus making it
        one-of-a-kind.Homemade means something was made at home. It is sometimes
        spelled 'home-made'. Each is unique and specially made, thus making it
        one-of-a-kind. "
      </Typography>

      <Button
        variant="contained"
        sx={{ marginTop: "20px", color: "black", padding: "8px 18px" }}
      >
        READ MORE
      </Button>

      <Box
        position="absolute"
        style={{
          height: "108vh",
          width: "150vw",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "150% 50% ",
          marginTop: "5%",
          marginLeft: "-50vw",
        }}





      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            marginTop: "5%",
            marginLeft: "18%",
            color: "white",
          }}
        >
          Give the Gift of Handmade!
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            marginTop: "1%",
            marginLeft: "18%",
            color: "white",
          }}
        >
          Something Handmade is much more meaningful.
        </Typography>

      </Box>



<Features/>




    </Container>
    


  
  );
};

export default Midsection;
