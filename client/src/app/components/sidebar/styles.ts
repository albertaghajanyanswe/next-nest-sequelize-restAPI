import { Theme } from "@mui/system";
// import { variables } from "../../configs";

const stylesWithTheme = (theme: Theme) => ({
  scroll: {
    // NOTE: custom scroll bar (not worked for mozila)
    '&::-webkit-scrollbar': {
      width: '4px',
      height: '4px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: `inset 0 0 5px white`,
      borderRadius: '10px'
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#B5C3D3',
      borderRadius: '10px'
    },
  },
  paper: {
    background: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.borderColor1',
    boxShadow: '0px 4px 16px rgba(181, 195, 211, 0.25)',
    borderRadius: '8px',
    '& > ul': {
      p: '4px'
    }
  },
  welcomeUser: {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    color: 'primary.btnMainDisabled'
  },
  userName: {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    color: 'white'
  },
  listItem: {
    padding: '0 8px',
    margin: '4px 0',
    fontFamily: 'var(--font-poppins)',
    borderRightWidth: '4px',
    borderRightStyle: 'solid',
    borderRightColor: 'primary.main',
    '& > .MuiButtonBase-root': {
      borderRadius: 1,
    },
    '&:hover': {
      '& .MuiListItemIcon-root': {
        '& > svg': {
          '& path': {
            color: 'white'

          }
        }
      },
      '& .MuiListItemText-root': {
        '& .MuiTypography-root': {
          fontFamily: 'var(--font-poppins)',
        }
      }
    }
  },
  listItemActive: {
    fontFamily: 'var(--font-poppins)',
    borderRightWidth: '4px',
    borderRightStyle: 'solid',
    borderRightColor: 'primary.borderColor8',
  },
  listItemBtn: {
    minHeight: '48px',
    px: 2.5,
    '&:hover': {
      background: theme.palette.primary.btnMainPressed,
      '& .MuiListItemIcon-root': {
        '& > svg': {
          '& path': {
            stroke: 'white'
          }
        }
      }
    }
  },
  listItemBtnActive: {
    backgroundColor: 'primary.btnMainPressed'
  },
  activeLinkIcon: {
    '& > svg': {
      '& path': {
        stroke: 'white'
      }
    }
  },
  activeLinkTitle: {
    '& .MuiTypography-root': {
      fontFamily: 'var(--font-poppins)',
      fontWeight: 500,
      letterSpacing: "-0.00300em"
    }
  },
  divider: {
    borderColor: 'primary.btnMainPressed',
    "&::before": {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'primary.btnMainPressed',
    },
    "&::after": {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'primary.btnMainPressed',
    },
  },
  linkText: {
    color: 'white',
    '& > span': {
      //      ...notoFont.style,
      fontFamily: 'var(--font-poppins)',
      fontSize: '14px',
      lineHeight: '16px',
    }
  },
});
export { stylesWithTheme };
