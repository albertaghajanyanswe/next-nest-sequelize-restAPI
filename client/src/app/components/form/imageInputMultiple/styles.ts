import { DefaultTheme, Theme } from "@mui/system";
import { globalMuiStylesWithTheme } from "@/app/globalMuiStyles";

const muiStylesWithTheme = (theme?: Theme | DefaultTheme | undefined) => ({
  container: {
    mt: '20px',
    pb: '12px',
    borderBottomWidth: '1.5px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'primary.borderColor1',
  },
  root: {
    width: '100%',
    // borderWidth: '1px',
    // borderStyle: 'solid',
    // borderColor: 'primary.borderColor3',
    // borderRadius: '8px',
    // padding: '16px'
  },
  rootError: {
    width: '100%',
    // borderWidth: '1px',
    // borderStyle: 'solid',
    // borderColor: 'primary.error',
    // paddingRight: '16px',
    display: 'flex',
    alignItems: 'center'
  },
  label: {
    color: 'primary.textMainDefault',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: '500',
    width: '100%'
  },
  description: {
    color: 'primary.textColor6',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '400',
    width: '100%',
    mt: '4px'
  },
  formatTxt: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '400',
    color: 'primary.textColor3',
    ml: '12px'
  },
  attachBtn: {
    width: 'fit-content',
    padding: '7px 16px',
    fontWeight: 500,
    fontSize: '14px',
    height: 'auto'
  },
  attachBtnStyle: {
    '& > span':{
      '& > svg': {
        '& > path': {
          ...globalMuiStylesWithTheme(theme).stroke_004B7F
        }
      }
    }
  },
  actionBtn: {
    width: 'fit-content',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
    padding: '8px 8px 8px 4px',
    minWidth: '90px',
    justifyContent: 'left'
  },
  removeBtn: {
    color: 'primary.red1',
    '& > span': {
      '& > svg': {
        '& > path': {
          ...globalMuiStylesWithTheme(theme).stroke_D04C60
        },
      },
    },
    '&:hover': {
      color: 'primary.red4',
      border: 'none',
      '& > span': {
        '& > svg': {
          '& > path': {
            ...globalMuiStylesWithTheme(theme).stroke_d16374
          }
        }
      }
    }
  },
  renameBtn: {
  },
  attachIcon: {
    display: 'flex',
    alignItems: 'center',
    '& > svg': {
      '& > path': {
        ...globalMuiStylesWithTheme(theme).stroke_9FAEBD
      }
    }
  },
  loadingProgress: {
    padding: '51px 30px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'primary.main',
  },
  titleBlock: {
    mb: 1,
    display: 'flex',
    maxHeight: '16px',
    width: '100%'
  },
  title: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 600,
    color: 'primary.textColor3'
  },
  accordion: {
    boxShadow: 'none',
    width: '100%',
    '& > .MuiAccordionSummary-root': {
      minHeight: 'fit-content',
      '& > .MuiAccordionSummary-expandIconWrapper': {
        position: 'absolute',
        top: '10px',
        right: 0
      }
    },
    '& > .MuiAccordionSummary-root.Mui-expanded': {
      minHeight: 'fit-content',
    }
  },
  accordionDisable: {
    '& > .MuiAccordionSummary-content': {
      cursor: 'default',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 0,
      marginBottom: 0,
    },
  },
  accordionSummary: {
    pointer: 'cursor',
    p: 0,
    '& > .MuiAccordionSummary-content': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 0,
      marginBottom: 0,
    },
    '& > .MuiAccordionSummary-content.Mui-expanded': {
      marginTop: 0,
      marginBottom: 0
    }
  },
  nameInput: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400,
    color: 'primary.textColor4',
    '& > .MuiInput-input.Mui-disabled': {
      WebkitTextFillColor: (theme as Theme)?.palette.primary.textColor4,
    }
  },
  suffix: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    position: 'absolute',
    color: 'primary.textColor6'
  },
  font12: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
  },
  infoBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '16px',
    width: '100%',
    backgroundColor: 'primary.lightBG3',
    borderRadius: '16px',
    mt: '20px'
  },
  infoTxt: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '400',
    color: 'primary.textColor4'
  }
})

export  {muiStylesWithTheme};