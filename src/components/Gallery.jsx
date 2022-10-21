import React from "react";
import Header from "./Header";
import { useCart } from "react-use-cart";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Footer from "./Footer";
import { RWebShare } from "react-web-share";
import Modal from "@mui/material/Modal";

const Gallery = () => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const { addItem } = useCart();

  const Sdata = [
    {
      sname: "Image1",
      imgsrc: "/img/panda.jpg",
      title: "Panda",
      price: "$45",
      des: "The giant panda, also known as the panda bear, is a bear species endemic to China. ",
    },

    {
      sname: "Image2",
      imgsrc: "/img/flower.jpg",
      title: "Flower",
      price: "$50",
      des: "A flower, sometimes known as a bloom or blossom, is the reproductive structure found .",
    },

    {
      sname: "Image3",
      imgsrc: "/img/tiger.jpeg",
      title: "Tiger",
      price: "$47",
      des: "The tiger is the largest living cat species and a member of the genus Panthera. ",
    },

    {
      sname: "Image4",
      imgsrc: "/img/owl.jpg",
      title: "Owl",
      price: "$48",
      des: "Owls are birds from the order Strigiformes, which includes over 200 species of mostly solitary. ",
    },

    {
      sname: "Image5",
      imgsrc: "/img/butterfly.jpg",
      title: "Butterfly",
      price: "$65",
      des: " A butterfly is a flying insect with a small body and large, often colorful wings.  ",
    },

    {
      sname: "Image6",
      imgsrc: "/img/Penguin.jpg",
      title: "Penguin",
      price: "$35",
      des: "Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere",
    },

    {
      sname: "Image7",
      imgsrc: "/img/Giraffe.webp",
      title: "Giraffe",
      price: "$55",
      des: "The giraffe is a large African hoofed mammal belonging to the genus Giraffa. ",
    },

    {
      sname: "Image8",
      imgsrc: "/img/rabbit.jpg",
      title: "Rabbit",
      price: "$48",
      des: "Rabbits make great pets for children. However, they are fragile and young children should not handle them. ",
    },
  ];

  return (
    <div>
      <Header />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Sdata.map((e) => {
          return (
            <>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: "16%",
                  margin: "2% 2%",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  width="100%"
                  alt="image"
                  imgname={e.sname}
                  image={e.imgsrc}
                  sx={{ backgroundColor: "Grey" }}
                />
                {/* 
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                ></Modal> */}

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {e.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                  >
                    {e.price}
                  </Typography>
                </CardContent>

                <CardActions
                  sx={{
                    marginBottom: "5%",
                    display: "grid",
                    justifyContent: "space-between",
                  }}
                >
                  {/* <RWebShare
                    data={{
                      text: "Like humans, flamingos make friends for life",
                      url: window.location,
                      title: "Share",
                    }}
                    onClick={() => console.info("shared successfully!")}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        display: "block",
                        width: "360%",
                        margin: "12% 12%",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      Share
                    </Button>
                  </RWebShare> */}

                  <Button
                    size="medium"
                    variant="contained"
                    display="block"
                    sx={{
                      display: "block",
                      width: "400%",
                      margin: "12% 12%",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                    onClick={() => addItem(e.sname)}
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
