import {
  Button,
  Checkbox,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import TourIcon from "@mui/icons-material/Tour";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Footer from "./Footer";

const Contact = () => {
  const navigate = useNavigate();

  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    message: "",

  });

  const [records, setRecord] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userDetail, id: new Date().getTime() };
    console.log(records);
    setUserDetail({ name: "", email: "", message: "" });
    setRecord([...records, newRecord]);
 

    navigate('/Successful');

  };

  return (
    <>
      <Header />

      <div
        className="grid-container"
        style={{
          display: "flex",
          gridtemplateColumns: "max-content",
          padding: "10px 20px",

        }}
      >
        <div
          style={{
            backgroundColor: "white",
            textAlign: "left",
            width: "100%",
            height: "650px",
            fontSize: "60px",
            padding: "30px ",
          }}
        >
          Get In Touch
          <Typography sx={{}}>
            Hey there,Feel free to reach out to us on below details and we will
            try to be responsive as possible.
            <br />
            <br />
            <TourIcon />{" "}
            <span style={{ marginLeft: "20px", marginBottom: "20px" }}>
              REACH US
            </span>{" "}
            <br />
            <br />
            <Typography>
              <b>
                Siddheswar Apartment near Deer Circle ,
                PrahladNagar,Ahmedabad,Gujrat{" "}
              </b>
            </Typography>
            <br />
            <AddIcCallIcon />
            <span style={{ marginLeft: "20px" }}>CONTACT US</span>
            <br />
            <br />
            <Typography>
              <b>0761-2681456, 8850938744</b>
            </Typography>
            <br />
            <EmailIcon />
            <span style={{ marginLeft: "20px" }}>MAIL US</span>
            <br />
            <br />
            <Typography>
              <b>hastcrafted@.gmail.com</b>
            </Typography>
            <br />
            <hr />
            <span
              style={{
                margin: "20px 0px",
                display: "block",
              }}
            >
              FOLLOW US
            </span>
            <Button
              href="https://www.instagram.com/craftncreation2/?utm_medium=copy_link"
              target="_blank"
            >
              <InstagramIcon sx={{ cursor: "pointer", color: "black" }} />
            </Button>
            <Button
              href="http://youtube.com/channel/UC0oMKGBD1RI9b0nAWpM4GBA"
              target="_blank"
            >
              <YouTubeIcon sx={{ cursor: "pointer", color: "black" }} />
            </Button>
            <Button
              href="https://www.pinterest.ca/sukanyakori/?invite_code=7afa268448134e3cb9b548c0d5097b8b&sender=810507401596792274"
              target="_blank"
            >
              <PinterestIcon sx={{ cursor: "pointer", color: "black" }} />
            </Button>
          </Typography>
        </div>

        <div
          style={{
            backgroundColor: "white",
            textAlign: "left",
            width: "100%",
            height: "650px",
            fontSize: "40px",
            padding: "30px ",
            borderLeft: "1px solid grey",
          }}
        >
          Drop Us a Line or Two
          <form
            style={{ width: "100%", height: "650px", fontSize: "20px" }}
            action=""
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <InputLabel required sx={{ margin: "20px 0px" }}>
                <b> Name</b>
              </InputLabel>
              <TextField
                name="name"
                id="name"
                class="form-control"
                value={userDetail.name}
                onChange={handleInput}
                placeholder="Full Name"
                fullWidth
              />
            </div>
            <div className="form-group">
              <InputLabel required sx={{ margin: "20px 0px" }}>
                <b>Email </b>
              </InputLabel>
              <TextField
                name="email"
                id="email"
                type="email"
                class="form-control"
                value={userDetail.email}
                onChange={handleInput}
                placeholder="Email Address"
                fullWidth
              />
            </div>

            <div className="form-group">
              <InputLabel required sx={{ margin: "20px 0px" }}>
                <b>Comment or Message </b>
              </InputLabel>
              <TextField
                name="message"
                id="message"
                type="Message"
                class="form-control"
                value={userDetail.message}
                onChange={handleInput}
                placeholder="Your Message...."
                fullWidth
              />
            </div>

            <Checkbox type="checkbox" class="input" id="exampleCheck1" />
            <Button
              variant="contained"
              sx={{ margin: "50px 50px" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
          {/* <div>
            {records.map((currentElement) => {
              const { id, name, email, message } = currentElement;
              return (
                <div className="showDataStyle" key={id}>
                  <p> {name} </p>
                  <p> {email} </p>
                  <p> {message} </p>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
