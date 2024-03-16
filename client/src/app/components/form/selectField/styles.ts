import { DefaultTheme, Theme } from "@mui/system";
import { globalMuiStylesWithTheme } from "@/app/globalMuiStyles";

const muiStylesWithTheme = (theme?: Theme | DefaultTheme | undefined) => ({
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
    display: 'flex',
    justifyContent: 'space-between',
    whiteSpace: 'break-spaces',
    wordBreak: 'break-word',
    mt: '4px',
    lineHeight: '16px',
    fontSize: '14px',
  },
  fieldContainer: {
    mt: '20px',
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
    marginTop: '12px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 16px rgba(181, 195, 211, 0.25)',
    borderRadius: '12px',
    padding: '8px',
    maxHeight: '188px',
    maxWidth: 'min-content', // select paper width
    '& > .MuiList-root': {
      padding: 0,
      '& > li': {
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
  dropdownBlockMultiselect: {
    overflow: 'auto',
    overflowX: 'hidden',
    marginTop: '12px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 16px rgba(181, 195, 211, 0.25)',
    borderRadius: '12px',
    padding: '8px',
    maxHeight: '188px',
    maxWidth: 'min-content', // select paper width
    '& > .MuiList-root': {
      padding: 0,
      '& > li': {
        '& > div:not(.themeShowInSelected):first-of-type': {
          display: 'flex',
          flexDirection: 'column'
        }
      },
      '& > .MuiMenuItem-root': {
        borderRadius: '4px',
        padding: '12px 12px 12px 0',
        lineHeight: '16px'
      },
      '& > .Mui-selected': {
        padding: '12px 12px 12px 0',
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
  small: {
    '& > svg': {
      width: '16px',
      height: '16px',
      '& > rect': {
        width: '6px',
        height: '6px',
        x: 5,
        y: 5,
      },
      '& > rect:first-of-type': {
        width: '14px',
        height: '14px',
        x: 1,
        y: 1,
      }
    }
  },
  menuItemOpt: {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '16px',
    color: 'primary.textColor1'
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
  menuItemStyle: {
    '&.Mui-disabled': {
      opacity: 0.6,
      '& .MuiTypography-root': {
        color: 'primary.textColor3'
      }
    }
  },
  select: {
    '& .MuiSelect-select': {
      whiteSpace: 'break-spaces!important',
      wordBreak: 'break-word',
      display: 'flex',
      alignItems: 'center'
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
})
export  {muiStylesWithTheme};