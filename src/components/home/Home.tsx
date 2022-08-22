import React from "react";
import { Box } from "@mui/material";
import backgroundImage from "../assets/backgrounds/trackman_golf_when_technology_meets_passion_2.jpg";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
`;

const Home = () => {
  return (
    <Box
      sx={{
        bgcolor: "#cfe8fc",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Image src={backgroundImage}></Image>
    </Box>
  );
};

export default Home;
