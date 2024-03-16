const muiStyles = {
  tableCellAction: {
    cursor: 'pointer',
    paddingRight: '18px!important',
    textAlign: 'center',
    '& > svg': {
      marginTop: '4px',
      fontSize: '1.4rem'
    },
    '& > svg:hover': {
      background: 'rgba(61, 61, 61, 0.2)',
      borderRadius: '50%'
    },
  },
  tableCellItem: {
    wordBreak: 'break-word',
    fontFamily: 'var(--font-poppins)',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
    color: 'primary.textColor1',
  },
  noResult: {
    wordBreak: 'break-word',
    fontFamily: 'var(--font-poppins)',
    fontSize: '14px',
    fontWeight: '500',
    color: 'primary.textColor3',
  },
  emptyBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};
export { muiStyles };