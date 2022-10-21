import React from "react";
import { Button, Toolbar, Typography,IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Toolbar sx={{ position: "sticky", top: 0, width: "100%" }}>
        <Typography variant="h4">Navbar </Typography>

        <div
          style={{
            display: "flex",
            marginLeft: "65%",
            padding: "2% 1%",
            color: "black",
          }}
        >
          <Button
            component={Link}
            to="/"
            color="primary"
            variant="none"
            style={{ border: "none" }}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/about"
            color="primary"
            variant="none"
            style={{ border: "none" }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/gallery"
            color="primary"
            variant="none"
            style={{ border: "none" }}
          >
            Gallery
          </Button>
          <Button
            component={Link}
            to="/contact"
            color="primary"
            variant="none"
            style={{ border: "none" }}
          >
            Contact
          </Button>

          <Button
            component={Link}
            to="/SignUp"
            color="primary"
            variant="none"
            style={{ border: "none" }}
          >
            SignUP
          </Button>
        </div>
        <IconButton component={Link} to="../components/Cart.jsx">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </div>
  );
};

export default Header;
