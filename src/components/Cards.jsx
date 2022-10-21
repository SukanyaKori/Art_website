import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
import { IconButton } from "@mui/material";


function Pictures() {

  const [value, setValue] = useState(0);

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
      des: "A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants",
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

  const slideRight = () => {
    // setCurrent(current + 1);
    value === 0 ? setValue(-100) : setValue(value + 100);
  };

  const slideLeft = () => {
    // setCurrent(current - 1);

    value === -100 ? setValue(0) : setValue(value - 100);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton id="slideLeft" onClick={slideLeft}>
          <NavigateBeforeIcon />
        </IconButton>

        {/* < Carousel img={Sdata}/> */}
        {Sdata.map((e) => {
          return (
            <Card
              sx={{
                width: "100%",
                maxWidth: "16%",
                borderRadius: "1em",
                margin: "3% 1.5%",
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


              {/* <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.des}
                </Typography>
              </CardContent> */}
            </Card>
          );
        })}
        <IconButton id="slideRight" onClick={slideRight}>
          <NavigateNextIcon />
     
        </IconButton>
      </div>
    </div>
  );
}

export default Pictures;
