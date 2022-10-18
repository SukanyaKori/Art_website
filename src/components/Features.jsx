import React from "react";

import LockPersonIcon from "@mui/icons-material/LockPerson";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SpaIcon from "@mui/icons-material/Spa";
import { Avatar, Typography } from "@material-ui/core";
import { Container } from "@mui/system";

const Features = () => {
  return (
    <div
      className="columns"
      style={{
        display: "flex",
        marginTop: "60%",
        justifyContent: "space-between",
        marginBottom:'10%'
      }}
    >
      <div className="column1" style={{}}>
        <Container
          sx={{ display: "table-row-group", textAlign: "-webkit-center" }}
        >
          <Avatar>
            <LockPersonIcon />
          </Avatar>

          <Typography>
            <b>SECURE PAYMENT</b>

            <Typography>
              People pay with Debit card or online app over cash these days.
            </Typography>
          </Typography>
        </Container>
      </div>
      <div className="column2">
        <Container
          sx={{ display: "table-row-group", textAlign: "-webkit-center" }}
        >
          <Avatar>
            <LocalShippingIcon />
          </Avatar>

          <Typography>
            <b>DELIVERED WITH CARE</b>

            <Typography>
              It has been sent to your place with best packing.
            </Typography>
          </Typography>
        </Container>
      </div>
      <div className="column3">
        <Container
          sx={{ display: "table-row-group", textAlign: "-webkit-center" }}
        >
          <Avatar>
            <SpaIcon />
          </Avatar>

          <Typography>
            <b>EXCELLENT SERVICE</b>
            <Typography>Give our best with customer services.</Typography>{" "}
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default Features;
