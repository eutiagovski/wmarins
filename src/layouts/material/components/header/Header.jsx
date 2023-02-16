import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      <Container
        fullWidth
        maxWidth="xxl"
        sx={{ backgroundColor: "primary.dark" }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: "100%",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
          color="primary.light"
        >
          <Box sx={{display: 'flex'}}>
            <Typography variant='body1' color='secondary.main'>MARINS</Typography>
            <Typography variant='body1'>WALLACE</Typography>
          </Box>
          <Box>
            <Typography variant='body1'>{new Date().getFullYear()}</Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Header;
