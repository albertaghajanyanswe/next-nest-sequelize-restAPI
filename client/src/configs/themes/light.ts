import { createTheme, PaletteOptions } from '@mui/material/styles';

const Default = () => {
  return {
    primary: {
      main: '#004B7F',
      error: '#f44336',
      warning: '#E99800',
      success: '#21a900',
      info: '#096C7C',
      btnMainHover: '#457BAC',
      btnMainPressed: '#226395',
      btnMainDisabled: '#CFE3F2',
    },
    secondary: {
      main: '#004B7F',
      error: '#f44336',
      warning: '#E99800',
      success: '#21a900',
      info: '#096C7C',
      lightBg: '#f44336',
      btnMainHover: '#457BAC',
      btnMainPressed: '#226395',
      btnMainDisabled: '#CFE3F2',
    },
  };
};

const defaultColors = Default();
const palette: PaletteOptions = {
  mode: 'light',
  ...defaultColors,
};

// Note: example how to customize default theme values
// Default theme
const theme = createTheme({
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&.themeDatePickerForLabel': {
            '& label': {
              marginTop: '4px'
            }
          },
          '&.themeDatePickerForLabelReverse': {
            '& label': {
              marginLeft: '36px'
            }
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: '1px solid #E0E0E0;',
        },
        input: {
          '&::placeholder': {
            color: '#b7b7b7',
            opacity: 1,
            fontFamily: 'Poppins',
            fontSize: '14px'
          },
        },

        root: {
          '& .MuiInputBase-inputSizeSmall': {
            padding: '12.5px 16px'
          },
          '& .MuiInputBase-sizeSmall': {
            padding: '12.5px 16px'
          },
          fontFamily: 'Poppins',
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #6EA3C9'
            },
          },
          '&.Mui-focused': {
            // '& .MuiOutlinedInput-notchedOutline': {
            //   border: '1px solid #004B7F',
            //   boxShadow: '0px 0px 0px 3px rgba(0, 75, 127, 0.1)'
            // },
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #457BAC',
              boxShadow: '0px 0px 0px 2px rgba(207, 227, 242, 0.6)'
            },
          },
          '&.Mui-error': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #C62840',
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                boxShadow: '0px 0px 0px 2px rgba(198, 40, 64, 0.1)'
              },
            },
          },
          '&.Mui-disabled': {
            backgroundColor: '#f5f5f5',
            '& > input': {
              cursor: 'text',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid #E0E0E0',
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          // borderRadius: '4px 4px 0 0'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.themeDrawerMenuItem': {
            '&:hover': {
              '& a, p': {
                color: '#2176B1',
              },
              backgroundColor: 'inherit',
            },
            '&:active': {
              backgroundColor: 'inherit',
              '& a, p': {
                color: '#002E4E',
              },
            },
          },
          '&.themeDrawerActiveMenuItem': {
            '&:hover': {
              '& a, p': {
                color: '#004B7F',
              },
            },
          },
        }
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: '#FFFFFF',
          borderRadius: '2px',
          fontSize: '14px',
          lineHeight: '24px',
          fontWeight: 400,
          fontFamily: 'Poppins',
          '& .MuiMenuItem-root': {
            '&:hover': {
              backgroundColor: '#F3FAFF',
            },
          },
          '& .MuiButtonBase-root.MuiMenuItem-root.Mui-selected': {
            '& .themeShowInSelected': {
              display: 'flex',
            },
            backgroundColor: '#F3FAFF',
          }
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          fontWeight: 600,
          fontFamily: 'Poppins',
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          alignItems: 'end'
        },
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontFamily: 'Poppins',
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: 24,
          fontWeight: 700,
          color: '#646681',
          fontFamily: 'Poppins',
        },
      },
    },
  },
});

export default theme;
