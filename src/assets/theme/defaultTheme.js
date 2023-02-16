import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#575756",
      light: "#a5a1a1",
      dark: "#3d3e3c",
      white: "#FFF",
    },
    secondary: {
      main: "#885898",
    },
  },
  typography: {
    fontSize: "12px",
    fontFamily:  ["New Order", "sans-serif"].join(),
    fontWeightMedium: 'normal',
    subtitle1: {
        fontSize: '12px',
        // fontFamily:  ["New Order", "sans-serif"].join(),
        fontWeight: 'normal'
    }
  },
});
