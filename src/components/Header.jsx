import React from "react";
import { Button, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <div style={{}}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4">Navbar </Typography>

        <div style={{ display: "flex", marginLeft: "65%", color: "black" }}>
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
    </div>
  );
};

export default Header;
