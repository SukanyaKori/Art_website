import { Box} from "@mui/system";
import React from "react";
import image from "../components/img/t.jpg";


const Mid = () => {
  return (
    <>
    <Box

      sx={{
        height: "60vh" ,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "60% 70%",
        marginLeft: "30%",
      }}

    />

    </>
  );
  
};

export default Mid;
