import React from "react";

import Header from "./Header";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Footer from "./Footer";
import { RWebShare } from "react-web-share";

const Gallery = () => {
  const Sdata = [
    {
      sname: "Image1",
      imgsrc: "/img/panda.jpg",
      title: "Panda",
      des: "The giant panda, also known as the panda bear, is a bear species endemic to China. ",
    },

    {
      sname: "Image2",
      imgsrc: "/img/flower.jpg",
      title: "Flower",
      des: "A flower, sometimes known as a bloom or blossom, is the reproductive structure found .",
    },

    {
      sname: "Image3",
      imgsrc: "/img/tiger.jpeg",
      title: "Tiger",
      des: "The tiger is the largest living cat species and a member of the genus Panthera. ",
    },

    {
      sname: "Image4",
      imgsrc: "/img/owl.jpg",
      title: "Owl",
      des: "Owls are birds from the order Strigiformes, which includes over 200 species of mostly solitary. ",
    },

    {
      sname: "Image5",
      imgsrc: "/img/butterfly.jpg",
      title: "Butterfly",
      des: " A butterfly is a flying insect with a small body and large, often colorful wings.  ",
    },

    {
      sname: "Image6",
      imgsrc: "/img/Penguin.jpg",
      title: "Penguin",
      des: "Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere",
    },

    {
      sname: "Image7",
      imgsrc: "/img/Giraffe.webp",
      title: "Giraffe",
      des: "The giraffe is a large African hoofed mammal belonging to the genus Giraffa. ",
    },

    {
      sname: "Image8",
      imgsrc: "/img/rabbit.jpg",
      title: "Rabbit",
      des: "Rabbits make great pets for children. However, they are fragile and young children should not handle them. ",
    },
  ];

  

  return (
    <div>
      <Header />

      <div style={{ display: "flex", flexDirection: "", flexWrap: "wrap" }}>
        {Sdata.map((e) => {
          return (
            <>
            <Card
              sx={{
                maxWidth: "345px",
                borderRadius: "1em",
                margin: "40px 50px",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                alt="image"
                imgname={e.sname}
                image={e.imgsrc}
                sx={{ backgroundColor: "Grey" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.des}
                </Typography>
              </CardContent>
              <CardActions>
                <RWebShare
                  data={{
                    text: "Like humans, flamingos make friends for life",
                    url: window.location,
                    title: "Share",
                  }}
                  onClick={() => console.info("shared successfully!")}
                >
                  <Button
                    size="small"
                    sx={{ marginLeft: "5%", marginBottom: "5%" }}
                  >
                    Share
                  </Button>
                </RWebShare>

                <Button
                  size="small"
                  sx={{ marginLeft: "5%", marginBottom: "5%" }}
                >
                  Add
                </Button>
              </CardActions>
            </Card>
            
            </>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
