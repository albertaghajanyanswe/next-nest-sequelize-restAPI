const muiStyles = {
  titleBlock: {
    mb: 1,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    pl: '4px',
  },
  title: {
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 500,
    color: 'primary.textColor4',
    fontFamily: 'var(--font-poppins)',
    // NOTE: hide text color change for checkboxes
    '&.Mui-focused': {
      color: 'primary.textColor5'
    },
    cursor: 'text'
  },
  tooltip: {
    maxWidth: '463px',
    width: '463px',
    '& > .MuiTooltip-tooltip': {
      maxWidth: '463px',
      // width: '463px',
      borderRadius: '8px',
      p: '8px 12px',
      display: 'flex',
      textAlign: 'start',
      fontSize: '12px',
      lineHeight: '16px',
      mt: '8px!important',
      backgroundColor: 'primary.btnMainDisabled',
      color: 'primary.main',
      fontWeight: '500'
    }
  },
}

export { muiStyles };