import { CardMedia, Typography, Box, CardContent, Avatar } from "@mui/material";
import React from "react";
import Footer from "./Footer";

import Header from "./Header";
import Cards from "./Cards";

const About = () => {
  return (
    <>
      <Header />

      <div
        className="grid-container"
        style={{
          display: "flex",
          gridtemplateColumns: "max-content",
          gap: "5px",
          padding: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            textAlign: "center",
            width: "20%",
            height: "250px",
            fontSize: "60px",
          }}
        >
          About
        </div>
        <div
          style={{
            backgroundColor: "white",
            textAlign: "center",
            width: "100%",
            fontSize: "30px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ paddingTop: "20px", paddingLeft: "20px", textAlign: "left" }}
          >
            <b>
              Provide personalised Items and Gifts for your Family and Friends
            </b>
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ padding: "30px 30px", textAlign: "left" }}
          >
            A handicraft, sometimes more precisely expressed as artisanal
            handicraft or handmade, is any of a wide variety of types of work
            where useful and decorative objects are made completely by one’s
            hand or by using only simple, non-automated related tools like
            scissors, carving implements, or hooks.
            <Typography variant="subtitle2" sx={{ paddingTop: "20px" }}>
              It is a traditional main sector of craft making and applies to a
              wide range of creative and design activities that are related to
              making things with one's hands and skill, including work with
              textiles, moldable and rigid materials, paper, plant fibers,clay
              etc.
            </Typography>
          </Typography>
        </div>
      </div>

      <div className="grid-container">
        <CardMedia
          component="video"
          autoPlay
          controls
          src="/img/Laptop Skin Painting _ Rennovating old laptop into new _ Painting 🖌️🎨.mp4"
          sx={{ padding: "20px 100px", height: "500px" }}
        />
      </div>

      <Typography
        variant="h5"
        sx={{ padding: "30px 80px ", textAlign: "center" }}
      >
        <b>
          " Homemade means something was made at home. It is sometimes spelled
          'home-made'. Each is unique and specially made, thus making it one-of-a-kind. "
        </b>
      </Typography>

      <Box
        sx={{
          maxWidth: 345,
          display: "flex",
          flexDirection: "inherit",
          margin: " 2% 40%",
          padding: "2%",
        }}
      >
        <Avatar alt="photo" src="/img/photo.jpg" />
        <CardContent sx={{ padding: "0px 20px" }}>
          <Typography sx={{}}>
            <b>XYZ</b>
          </Typography>
          <Typography>Founder, Owner</Typography>
        </CardContent>
      </Box>

      <Cards />

      <Footer />
    </>
  );
};

export default About;
