import { red } from '@mui/material/colors';
import {createTheme } from '@mui/material/styles';

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
            background:'#4A4A4A'
            
          },
      }
    },

    MuiFormControlLabel: {
      label: {
        fontSize: '2rem'
      }
    }

    // MuiButton: {

    //   variants: [
    //     {
    //       props: { variant: 'dashed' },
    //       style: {
    //         textTransform: 'none',
    //         border: `2px dashed ${blue[500]}`,
    //       },
    //     } ] 
    // },

  }
  });