import { keyframes } from "@emotion/react";
import { Theme } from "@mui/system";
import { globalMuiStylesWithTheme } from "@/app/globalMuiStyles";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const stylesCallback = (theme?: Theme | undefined) => ({
  button: {
    fontSize: '16px',
    fontWeight: 500,
    padding: '10px 32px',
    minWidth: 'fit-content',
    height: '44px',
    boxShadow: 'none',
    borderRadius: '4px',
  },
  primaryBtn: {
    color: 'white',
    backgroundColor: 'primary.btnMainPressed',
    borderRadius: '500px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.btnMainPressed',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    height: 'fit-content',
    padding: '10px 24px',
    minHeight: '48px',

    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'primary.btnMainHover',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.btnMainHover',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'primary.btnMain',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.btnMain',
    },
    '&:disabled': {
      boxShadow: 'none',
      backgroundColor: 'primary.btnMainDisabled',
      color: 'primary.textColor2',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.btnMainDisabled',
    },
  },
  secondaryBtn: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    backgroundColor: 'inherit',
    boxShadow: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.btnMainPressed',
    color: 'primary.main',
    borderRadius: '500px',
    '&:hover': {
      boxShadow: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.btnMainHover',
      color: 'primary.btnMainHover',
      backgroundColor: 'inherit',
      '& > span': {
        '& > svg': {
          '& > path': {
            ...globalMuiStylesWithTheme(theme).stroke_457BAC
          },
        },
      },
    },
    '&:active': {
      boxShadow: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.btnMainHover',
      color: 'primary.btnMainHover',
      backgroundColor: 'inherit'
    },
    '&:disabled': {
      boxShadow: 'none',
      color: 'primary.btnMainDisabled',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.btnMainDisabled',
      background: 'white',
      '& > span': {
        '& > svg': {
          '& > path': {
            ...globalMuiStylesWithTheme(theme).stroke_CFE3F2
          },
        },
      },
    },
  },
  tertiaryBtn: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    backgroundColor: 'inherit',
    boxShadow: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.borderColor1',
    color: 'primary.btnMain',
    borderRadius: '500px',
    '&:hover': {
      boxShadow: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.borderColor1',
      color: 'primary.btnMainHover',
      backgroundColor: 'inherit',
      '& > span': {
        '& > svg': {
          '& > path': {
            ...globalMuiStylesWithTheme(theme).stroke_457BAC
          },
        },
      },
    },
    '&:active': {
      boxShadow: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.btnMainHover',
      color: 'primary.btnMainPressed',
      backgroundColor: 'primary.btnMainHover'
    },
    '&:disabled': {
      boxShadow: 'none',
      color: 'primary.btnMainDisabled',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.textColor2',
      background: 'white',
      '& > span': {
        '& > svg': {
          '& > path': {
            ...globalMuiStylesWithTheme(theme).stroke_ECF4F9
          },
        },
      },
    },
    '&.Mui-disabled': {
      boxShadow: 'none',
      color: 'primary.btnMainDisabled',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.textColor2',
      background: 'white',
      '& > span': {
        opacity: '0.6',
        '& > svg': {
          '& > path': {
            ...globalMuiStylesWithTheme(theme).stroke_ECF4F9
          },
        },
      },
    },
  },
  ghostBtn: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    backgroundColor: 'inherit',
    boxShadow: 'none',
    // border: 'none',
    // borderWidth: '1px',
    // borderStyle: 'solid',
    // borderColor: 'white',
    border: 'none',
    color: 'primary.btnMain',
    borderRadius: '500px',
    '& > span': {
      '& > svg': {
        '& > path': {
          ...globalMuiStylesWithTheme(theme).stroke_004B7F
        },
      },
    },
    '&:hover': {
      background: 'inherit',
      boxShadow: 'none',
      border: 'none',
      // borderWidth: '1px',
      // borderStyle: 'solid',
      // borderColor: 'white',
      color: 'primary.btnMainHover',
      '& > span': {
        '& > svg': {
          '& > path': {
            ...globalMuiStylesWithTheme(theme).stroke_457BAC
          },
        },
      },
    },
    '&:active': {
      border: 'none',
      // borderWidth: '1px',
      // borderStyle: 'solid',
      // borderColor: 'white',
      background: 'inherit',
      boxShadow: 'none',
      color: 'primary.btnMainPressed',
      '& > span': {
        '& > svg': {
          '& > path': {
            ...globalMuiStylesWithTheme(theme).stroke_226395
          },
        },
      },
    },
    '&:disabled': {
      boxShadow: 'none',
      border: 'none',
      // borderWidth: '1px',
      // borderStyle: 'solid',
      // borderColor: 'white',
      color: 'primary.textColor2',
      '& > span': {
        '& > svg': {
          '& > path': {
            ...globalMuiStylesWithTheme(theme).stroke_CFE3F2
          },
        },
      },
    },
  },
  tabBtn: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    boxShadow: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.borderColor2',
    color: 'primary.btnMain',
    borderRadius: '500px',
    backgroundColor: 'primary.lightBG1',
    '&:hover': {
      boxShadow: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.borderColor2',
      color: 'primary.btnMainHover',
      backgroundColor: 'primary.lightBG1',
    },
    '&:active': {
      boxShadow: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.borderColor2',
      color: 'primary.btnMainPressed',
      backgroundColor: 'primary.borderColor2'
    },
    '&:disabled': {
      boxShadow: 'none',
      color: 'primary.btnMainDisabled',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.textColor2',
      backgroundColor: 'primary.lightBG1',
      '& > span': {
        '& > svg': {
          '& > path': {
            ...globalMuiStylesWithTheme(theme).stroke_ECF4F9
          },
        },
      },
    },
    '&.Mui-disabled': {
      boxShadow: 'none',
      color: 'primary.btnMainDisabled',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.textColor2',
      background: 'white',
      '& > span': {
        opacity: '0.6',
        '& > svg': {
          '& > path': {
            ...globalMuiStylesWithTheme(theme).stroke_ECF4F9
          },
        },
      },
    },
  },
  small: {
    minHeight: '32px',
    height: '32px',
    padding: '8px 16px',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 500,
  },
  medium: {
    height: '48px'
  },
  big: {
    height: '56px'
  },
  onlyIcon: {
    padding: '7px 12px',
    '& > span': {
      margin: 0
    }
  },
  loadingPrimary: {
    display: 'flex',
    '& > svg': {
      animation: `${spin} 2s linear infinite;`,
      '& > path': {
        stroke: 'white'
      }
    }
  },
  loading: {
    display: 'flex',
    '& > svg': {
      animation: `${spin} 2s linear infinite;`
    }
  }
});
export { stylesCallback };
