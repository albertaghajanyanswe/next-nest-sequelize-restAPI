const muiStyles = {
  label: {
    marginLeft: 0,
    // width: '16px',
    '& > .MuiTypography-root': {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
      color: 'primary.textColor4',
    }
  },
  errorLabel: {
    '& > .MuiTypography-root': {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
      color: 'primary.error',
    }
  },
  errorLabelBlock: {
    '& span': {
      color: 'primary.error'
    }
  }
};
export { muiStyles };
