import { Theme } from '@mui/system';
// import { variables } from "../../configs";

const stylesWithTheme = (theme: Theme) => ({
  scroll: {
    // NOTE: custom scroll bar (not worked for mozila)
    '&::-webkit-scrollbar': {
      width: '4px',
      height: '4px',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: `inset 0 0 5px rgb(250,250,250,1)`,
      borderRadius: '10px',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#B5C3D3',
      borderRadius: '10px',
    },
  },
  paper: {
    background: 'rgb(250,250,250,1)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.borderColor1',
    boxShadow: '0px 4px 16px rgba(181, 195, 211, 0.25)',
    borderRadius: '8px',
    '& > ul': {
      p: '4px',
    },
  },
  welcomeUser: {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    color: 'primary.btnMainPressed',
  },
  userName: {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    color: 'primary.btnMainPressed',
  },
  listItem: {
    padding: '0 8px',
    margin: '4px 0',
    fontFamily: 'var(--font-poppins)',
    borderRightWidth: '0px',
    borderRightStyle: 'solid',
    borderRightColor: 'primary.btnMain',
    '& > .MuiButtonBase-root': {
      borderRadius: 1,
    },
    '&:hover': {
      borderRightWidth: '4px',
      '& .MuiListItemIcon-root': {
        '& > svg': {
          '& path': {
            color: 'rgb(250,250,250,1)',
          },
        },
      },
      '& .MuiListItemText-root': {
        '& .MuiTypography-root': {
          // color: 'inherit',
          // fontFamily: 'var(--font-poppins)',
        },
      },
    },
  },
  listItemActive: {
    fontFamily: 'var(--font-poppins)',
    borderRightWidth: '4px',
    borderRightStyle: 'solid',
    borderRightColor: 'primary.btnMain',
  },
  listItemBtn: {
    minHeight: '48px',
    px: 2.5,
    '&:hover': {
      background: theme.palette.primary.btnMain,
      '& .MuiListItemText-root': {
        '& .MuiTypography-root': {
          color: 'rgb(250,250,250,1)',
        },
      },
      '& .MuiListItemIcon-root': {
        '& > svg': {
          '& path': {
            stroke: 'rgb(250,250,250,1)',
          },
        },
      },
    },
  },
  listItemBtnActive: {
    backgroundColor: 'primary.btnMain',
  },
  linkIcon: {
    '& > svg': {
      '& path': {
        stroke: theme.palette.primary.textColor1,
      },
    },
  },
  activeLinkIcon: {
    '& > svg': {
      '& path': {
        stroke: 'rgb(250,250,250,1)',
      },
    },
  },
  activeLinkTitle: {
    '& .MuiTypography-root': {
      fontFamily: 'var(--font-poppins)',
      fontWeight: 500,
      letterSpacing: '-0.00300em',
      color: 'rgb(250,250,250,1)'
    },
  },
  divider: {
    borderColor: 'primary.main',
    borderBottomWidth: '2px',
    borderRadius: '2px',
    '&::before': {
      borderTopWidth: '2px',
      borderTopStyle: 'solid',
      borderTopColor: 'primary.btnMainPressed',
    },
    '&::after': {
      borderTopWidth: '2px',
      borderTopStyle: 'solid',
      borderTopColor: 'primary.btnMainPressed',
    },
  },
  linkText: {
    color: 'primary.textColor1',
    '& > span': {
      //      ...notoFont.style,
      fontFamily: 'var(--font-poppins)',
      fontSize: '14px',
      lineHeight: '16px',
      fontWeight: 600
    },
  },
});
export { stylesWithTheme };
