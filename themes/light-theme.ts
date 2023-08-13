import { createTheme } from '@mui/material/styles';
import { red,  } from '@mui/material/colors';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#101010'
    },
    secondary: {
      main: '#3A64D8'
    },
    info:{
      main: '#fff'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
        color: '#fff'
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          height: 70,
        },
      }
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 55,
        },
        h2: {
          fontSize: 45,
        },
        h3: {
          fontSize: 35
        },
        body1: {
          fontSize: 20
        },
        body2: {
          fontSize: 18
        }
        
      },
      // defaultProps: {
      //   mb: 2
      // }
    },

    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        size: 'medium',
        disableElevation: true,
        color: 'primary',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          padding: '10px',
          // borderRadius: 10,
          border: 'none',
          ":hover": {
            backgroundColor: 'rgba(0,0,0,0.05)',
            // transition: 'all 0.3s ease-in-out',
          
          }
        }
      }
    },
    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    },
    
  }
});