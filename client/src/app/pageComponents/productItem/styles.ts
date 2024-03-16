import { Theme } from '@mui/system';

const stylesWithTheme = (theme: Theme) => ({
  root: {
    backgroundColor: 'white',
    width: '100%',
    minHeight: '100%',
    padding: '52px 140px'
  },
  deleteAccountBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.borderColor2',
    borderRadius: '16px',
    mt: 5,
    p: 3,
    flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'row'},
    // [theme.breakpoints.up(724)]: {
    //   flexDirection: 'row',
    // },
    // [theme.breakpoints.down(723)]: {
    //   flexDirection: 'column',
    // },
  },
  textBold: {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
  },
  textNormal: {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    color: 'primary.textColor3'
  },
  deleteBtn: {
    minWidth: 'max-content',
    height: '32px',
    color: 'primary.red5',
    borderColor: 'primary.red5',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 500,
    p: '8px 16px',
    mt: {xs: 2, sm: 2, md: 2, lg: 0},
    '&:hover': {
      boxShadow: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.red5',
      color: 'primary.red5',
      opacity: '0.8',
      backgroundColor: 'inherit',
    },
    '&:active': {
      boxShadow: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.red5',
      color: 'primary.red5',
      opacity: '0.9',
      backgroundColor: 'inherit'
    },
    '&:disabled': {
      boxShadow: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.red5',
      color: 'primary.red5',
      opacity: '0.5',
      background: 'white'
    },
  },
  readableFieldBlock: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.borderColor2',
    padding: '16px 24px',
    backgroundColor: 'primary.lightBG1'
  },


  modalRoot: {
    '& .MuiPaper-root': {
      p: '32px 80px',
      maxWidth: '576px',
      boxShadow: 'none',
      borderRadius: '24px'
    },
    backdropFilter: "blur(12px)",
    zIndex: 1300,
    //other styles here
  },
  modalTitleRoot: {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '24px',
    color: 'primary.textColor1',
    p: 0,
    mb: 1,
    display: 'flex',
    justifyContent: 'start',
  },
  modalTitle: {
    justifyContent: 'start',
    width: '100%',
    display: 'flex',
    fontFamily: 'var(--font-poppins)',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '24px',
    color: 'primary.textColor1',
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
      opacity: 0.6,
      color: 'white'
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
export { stylesWithTheme };