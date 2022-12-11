import { red } from '@mui/material/colors';
import {createTheme } from '@mui/material/styles';
import { height } from '@mui/system';

export const theme = createTheme({

    palette: {
      primary: {
        main: '#A9A9A9',
        dark: '#616161',
        light: '#A9A9A9',
        contrastText: '#000',
      },
      secondary: {
        main: '#fff',
        dark: '#efff',
        light: '#efff',
        contrastText: '#000',
      },
    },

    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            background:'#4A4A4A',
            borderRadius: '10px'
          },
      },
      palette: {
        contrastText: '#fff',
      }
    },

    MuiFormControlLabel: {
      label: {
        fontSize: '2rem',
        fontWeight: "700",
      }
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      }
    },

  }
  });