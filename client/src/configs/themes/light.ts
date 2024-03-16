import { createTheme, PaletteOptions, SimplePaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // eslint-disable-next-line
  interface SimplePaletteColorOptions {
    error?: string;
    warning?: string;
    success?: string;
    info?: string;
    lightBG1?: string;
    lightBG2?: string;
    btnMainDisabled?: string;
    btnMainHover?: string;
    btnMainPressed?: string;
    btnMain?: string;
    textColor1?: string;
    textColor2?: string;
    textColor3?: string;
    textColor4?: string;
    textColor5?: string;
    textColor6?: string;
    textColor7?: string;
    textColor8?: string;
    borderColor1?: string;
    borderColor2?: string;
    borderColor3?: string;
    borderColor4?: string;
    borderColor5?: string;
    borderColor6?: string;
    borderColor7?: string;
    borderColor8?: string;
    red1: string;
    red2: string;
    red3: string;
    red4: string;
    red5: string;
    red6: string;
    green1: string;
    green2: string;
    green3: string;
    orange1: string;
    orange2: string;
    orange3: string;
  }

  // eslint-disable-next-line no-unused-vars
  interface PaletteColor {
    error?: string;
    warning?: string;
    success?: string;
    info?: string;
    lightBG1?: string;
    lightBG2?: string;
    btnMain?: string;
    btnMainHover?: string;
    btnMainPressed?: string;
    btnMainDisabled?: string;
    textColor1?: string;
    textColor2?: string;
    textColor3?: string;
    textColor4?: string;
    textColor5?: string;
    textColor6?: string;
    textColor7?: string;
    textColor8?: string;
    borderColor1?: string;
    borderColor2?: string;
    borderColor3?: string;
    borderColor4?: string;
    borderColor5?: string;
    borderColor6?: string;
    borderColor7?: string;
    borderColor8?: string;
    red1: string;
    red2: string;
    red3: string;
    red4: string;
    red5: string;
    red6: string;
    green1: string;
    green2: string;
    green3: string;
    orange1: string;
    orange2: string;
    orange3: string;
  }
}

interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
  secondary?: SimplePaletteColorOptions;
  testColor?: string;
}

const Default = (): DefaultPaletteOptions => {
  return {
    primary: {
      main: '#004B7F',
      error: '#f44336',
      warning: '#E99800',
      success: '#21a900',
      info: '#096C7C',
      lightBG1: '#FAFBFD',
      lightBG2: '#f5f5f5',
      btnMain: '#004B7F',
      btnMainHover: '#457BAC',
      btnMainPressed: '#226395',
      btnMainDisabled: '#CFE3F2',

      textColor1: '#1D1D1B',
      textColor2: '#ECF4F9',
      textColor3: '#728191',
      textColor4: '#878787',
      textColor5: '#494947',
      textColor6: '#9FAEBD',
      textColor7: '#8998A8',
      textColor8: '#b7b7b7',

      borderColor1: '#F1F4FA',
      borderColor2: '#DFE8F3',
      borderColor3: '#B4B4B4',
      borderColor4: '#E0E0E0',
      borderColor5: '#ECE8E2',
      borderColor6: '#D2CDC6',
      borderColor7: '#EFEFEF',
      borderColor8: '#8EB8D7',

      red1: '#FEF1F3',
      red2: '#F7D9DE',
      red3: '#d16374',
      red4: '#d16d7c',
      red5: '#D04C60',
      red6: '#cb394f',
      green1: '#EEFEF9',
      green2: '#B3E7D7',
      green3: '#009E6E',
      orange1: '#FFFAF3',
      orange2: '#FCECD9',
      orange3: '#DA9C50',
    },
    secondary: {
      main: '#004B7F',
      error: '#f44336',
      warning: '#E99800',
      success: '#21a900',
      info: '#096C7C',
      lightBG1: '#FAFBFD',
      lightBG2: '#f5f5f5',
      btnMain: '#004B7F',
      btnMainHover: '#457BAC',
      btnMainPressed: '#226395',
      btnMainDisabled: '#CFE3F2',

      textColor1: '#1D1D1B',
      textColor2: '#ECF4F9',
      textColor3: '#728191',
      textColor4: '#878787',
      textColor5: '#494947',
      textColor6: '#9FAEBD',
      textColor7: '#8998A8',
      textColor8: '#b7b7b7',

      borderColor1: '#F1F4FA',
      borderColor2: '#DFE8F3',
      borderColor3: '#B4B4B4',

      red1: '#FEF1F3',
      red2: '#F7D9DE',
      red3: '#d16374',
      red4: '#d16d7c',
      red5: '#D04C60',
      red6: '#cb394f',
      green1: '#EEFEF9',
      green2: '#B3E7D7',
      green3: '#009E6E',
      orange1: '#FFFAF3',
      orange2: '#FCECD9',
      orange3: '#DA9C50',
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
          fontFamily: 'var(--font-poppins)',
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: 'var(--font-poppins)',
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-poppins)',
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-poppins)',
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-poppins)',
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-poppins)',
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
          fontFamily: 'var(--font-poppins)',
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
            fontFamily: 'var(--font-poppins)',
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
          fontFamily: 'var(--font-poppins)',
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
          fontFamily: 'var(--font-poppins)',
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
          fontFamily: 'var(--font-poppins)',
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
          fontFamily: 'var(--font-poppins)',
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: 24,
          fontWeight: 700,
          color: '#646681',
          fontFamily: 'var(--font-poppins)',
        },
      },
    },
  },
});

export default theme;
