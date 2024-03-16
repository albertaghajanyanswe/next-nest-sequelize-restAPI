import { DefaultTheme, Theme } from "@mui/system";
import { globalMuiStylesWithTheme } from "../../globalMuiStyles";

const muiStylesWithTheme = (theme?: Theme | DefaultTheme | undefined) => ({
  root: {
    '& .MuiPaper-root': {
      maxWidth: '464px',
      p: 5,
    }
  },
  modalRoot: {
    '& .MuiPaper-root': {
      p: 4,
      maxWidth: '576px',
      boxShadow: 'none',
      borderRadius: '24px'
    },
    backdropFilter: "blur(12px)",
    zIndex: 1000,
    //other styles here
  },
  modalTitleRoot: {
    p: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalTitle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'var(--font-poppins)',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '32px',
    color: 'primary.textColor1',
  },
  contentRoot: {
    borderTopColor: 'primary.borderColor2',
    borderBottomColor: 'primary.borderColor2',
  },
  iconBtn: {
    width: 'fit-content',
    height: 'fit-content',
    padding: '7px',
    background: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.borderColor1',
    '&:hover': {
      '& > svg': {
        '& > path': {
          ...globalMuiStylesWithTheme(theme).stroke_457BAC
        }
      }
    },
    '&:active': {
      backgroundColor: 'primary.borderColor1',
      '& > svg': {
        '& > rect:first-of-type': {
          ...globalMuiStylesWithTheme(theme).stroke_F1F4FA
        },
        '& > path': {
          ...globalMuiStylesWithTheme(theme).stroke_226395
        }
      }
    },
  },
  scroll: {
    pr: '12px',
    ...globalMuiStylesWithTheme(theme).scroll_4_24_B5C3D3
  },
  modalTitleTxt: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 700,
    color: 'secondary.textColor1',
  },
  modalDescTxt: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    color: 'secondary.textColor3',
  },
  removeBtn: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 500,
    minHeight: '32px',
    height: 'auto',
    width: '100%',
    p: '4px 12px',
    backgroundColor: 'primary.error',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.error',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'primary.error',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.error',
      opacity: 0.92
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'primary.error',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.error',
      opacity: 1
    },
    '&:disabled': {
      boxShadow: 'none',
      backgroundColor: 'primary.error',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.error',
      opacity: 0.6
    },
  },
  cancelBtn: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 500,
    minHeight: '32px',
    height: '32px',
    width: '100%',
    p: '8px 12px',
  }

});
export { muiStylesWithTheme };
