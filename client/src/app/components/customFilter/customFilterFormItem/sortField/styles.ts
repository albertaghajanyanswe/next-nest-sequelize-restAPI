import { DefaultTheme, Theme } from "@mui/system";
import { globalMuiStylesWithTheme } from "../../../../globalMuiStyles";

const muiStylesWithTheme = (theme?: Theme | DefaultTheme | undefined) => ({
  select: {
    // height: '40px',
    height: 'fit-content',
    borderRadius: '8px',
    '& > .MuiOutlinedInput-root': {
      '& > .MuiOutlinedInput-input': {
        '&::placeholder': {
          color: 'primary.textColor6'
        },
        '& > p > em': {
          color: `${(theme as Theme)?.palette?.primary?.textColor6}!important`
        }
      }
    },
    '& > .MuiSelect-select': {
      padding: '8px 16px!important',
    },
    '& > .MuiInputBase-sizeSmall': {
      '& > .MuiSelect-select': {
        padding: '8px 16px',
        backgroundColor: 'red'
      }
    },
    '& .MuiSelect-select': {
      // whiteSpace: 'break-spaces!important',
      // wordBreak: 'break-word',
      // display: 'flex',
      lineHeight: '24px',
      alignItems: 'center',
      padding: '9.95px 16px'
    },
    '& .MuiSelect-icon': {
      right: '12px',
      top: 'calc(50% - 0.2em)',
    },
    '& .MuiSelect-iconOpen': {
      '& > path': {
        ...globalMuiStylesWithTheme(theme).stroke_004B7F
      }
    },
    '&:hover': {
      '& .MuiSelect-icon': {
        '& > path': {
          ...globalMuiStylesWithTheme(theme).stroke_226395
        }
      },
    },
    '&.Mui-focused': {
      '& .MuiSelect-icon': {
        '& > path': {
          ...globalMuiStylesWithTheme(theme).stroke_226395
        }
      },
    },
    '&.Mui-error': {
      '& .MuiSelect-icon': {
        '& > path': {
          ...globalMuiStylesWithTheme(theme).stroke_C62840
        }
      },
    }
  },
  selectBtnLeft: {
    '& .MuiSelect-icon': {
      right: '48px',
      top: 'calc(50% - 0.2em)',
    },
  },
  withStartIconStyle: {
    pl: 2,
    '& .MuiSelect-select': {
      pl: '4px'
    }
  },
  menuItem: {
    color: 'primary.textColor3',
    height: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    whiteSpace: 'break-spaces',
    wordBreak: 'break-word',
    mt: '4px',
    '& > .MuiTypography-root': {
      fontFamily: 'var(--font-poppins)',
      fontSize: '14px',
      lineHeight: '16px',
      fontWeight: 400,
    },
  },
  label: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    color: 'primary.textColor1'
  },
  option: {
    color: 'primary.textColor1',
    '& > .MuiBox-root': {
      '& > .MuiListItemText-root': {
        '& > span': {
          fontFamily: 'var(--font-poppins)',
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 400,
        }
      }
    }
  },
  fieldContainer: {
    mb: 0
  },
  titleBlock: {
    mb: 1,
    display: 'flex',
    maxHeight: '16px'
  },
  title: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 600,
    color: 'primary.textColor3'
  },
  dropdownBlock: {
    overflow: 'auto',
    overflowX: 'hidden',
    // NOTE: custom scroll bar (not worked for mozila)
    ...globalMuiStylesWithTheme(theme).scroll_3_24_B5C3D3,

    marginTop: '12px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 16px rgba(181, 195, 211, 0.25)',
    borderRadius: '12px',
    padding: '8px',
    maxHeight: '188px',
    // maxWidth: 'min-content', // select paper width
    '& > .MuiList-root': {
      // minWidth: 'max-content',
      minWidth: '200px',
      padding: 0,
      '& > li': {
        minHeight: 'auto',
        '& > div:not(.themeShowInSelected):first-of-type': {
          display: 'flex',
          flexDirection: 'column'
        }
      },
      '& > .MuiMenuItem-root': {
        borderRadius: '4px',
        padding: '12px',
        lineHeight: '16px'
      },
      '& > .Mui-selected': {
        padding: '12px',
        lineHeight: '16px',
        backgroundColor: 'primary.borderColor1',
        borderRadius: '4px'
      }
    }
  },
  dropdownHideResetOpt: {
    '& .MuiList-root': {
      '& > li:first-of-type': {
        display: 'none'
      },
    }
  },
  listSubheader: {
    position: 'static',
    fontFamily: 'var(--font-poppins)',
    fontSize: '11px',
    lineHeight: '12px',
    fontWeight: 700,
    textTransform: 'uppercase',
    padding: '16px 12px 4px 12px'
  },
  divider: {
    borderColor: 'primary.borderColor1',
    "&::before": {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'primary.borderColor1',
    },
    "&::after": {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'primary.borderColor1',
    },
  },
})

export { muiStylesWithTheme };