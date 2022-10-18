import React from "react";
import { Toolbar, Typography, Button } from "@material-ui/core";
import { Link} from "react-router-dom";
import CopyrightIcon from "@mui/icons-material/Copyright";


const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        height: "200px",
        color: "Black",
        padding: "2%",
      }}
    >
      <Toolbar >
        <Typography variant="h4">Navbar </Typography>
        <div style={{ display: "flex", marginLeft: "70%", color: "black" }}>
          <Button
            component={Link}
            to="/"
            color="primary"
            variant="none"
            style={{ padding: "0px 20px", border: "none" }}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/about"
            color="primary"
            variant="none"
            style={{ padding: "0px 20px", border: "none" }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/gallery"
            color="primary"
            variant="none"
            style={{ padding: "0px 20px", border: "none" }}
          >
            Gallery
          </Button>
          <Button
            component={Link}
            to="/contact"
            color="primary"
            variant="none"
            style={{ padding: "0px 20px", border: "none" }}
          >
            Contact
          </Button>
        </div>
      </Toolbar>

      <Typography>
        <b>
          <CopyrightIcon /> 2022 The Art company
        </b>
        <p>Handmade Store</p>
      </Typography>
    </div>
  );
};

export default Footer;
