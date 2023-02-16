import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ 
          backgroundColor: "primary.white",
          color: "primary.main" }}
      >
        <Toolbar>
          <Grid container fullWidth>
            <Grid
              item
              xs={6}
              md={4}
              sx={{ display: "flex", alignItems: "center" }}
            >
              LOGO
            </Grid>
            <Grid
              item
              md={4}
              sx={{
                textAlign: "center",
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography variant='subtitle1'>Wallace Marins</Typography>
              <Typography variant='subtitle1'>ARQUITETURA E INTERIORES</Typography>
            </Grid>
            <Grid
              item
              md={4}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 1,
                alignItems: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Typography variant='subtitle1'>HOME</Typography>
              <Typography variant='subtitle1'>PORTFÓLIO</Typography>
              <Typography variant='subtitle1'>SOBRE</Typography>
              <Typography variant='subtitle1'>CONTATO</Typography>
            </Grid>
          </Grid>
          {/* <Box sx={{ textAlign: "center" }}>
            <Typography>Wallace Marins</Typography>
            <Typography>Arquitetura e Interiores</Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography>HOME</Typography>
              <Typography>PORTFÓLIO</Typography>
              <Typography>SOBRE</Typography>
              <Typography>CONTATO</Typography>
            </Box>
          </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
