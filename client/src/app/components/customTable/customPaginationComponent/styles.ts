const muiStyles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 0px 12px 16px',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: 'primary.borderColor1'
  },
  sticky: {
    position: 'sticky',
    bottom: 0,
    backgroundColor: 'inherit'
  },
  select: {
    '& > fieldset': {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'primary.borderColor2',
      borderRadius: '8px'
    },
    '& > .MuiSelect-select': {
      padding: '0px 16px',
      fontFamily: 'var(--font-poppins)',
      color: 'primary.textColor3',
      fontSize: '12px',
      lineHeight: '24px',
      fontWeight: '400',
    }
  },
  dropdown: {
    mt: 1,
    borderRadius: '8px',
    '& > ul': {
      '& > li': {
        justifyContent: 'center',
        color: 'primary.textColor3',
        fontSize: '12px',
        fontWeight: '400',
      }
    },
    '&::-webkit-scrollbar-button': {
      height: '2px'
    },
    '&::-webkit-scrollbar': {
      width: '3px',
      height: '24px'
    },
    '&::-webkit-scrollbar-track': {
      // boxShadow: `inset 0 0 5px white`,
      borderRadius: '10px',
      height: '10px'
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#B5C3D3',
      borderRadius: '10px'
    },
  },
  info: {
    fontFamily: 'var(--font-poppins)',
    color: 'primary.textColor3',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '500',
  },
  pagination: {
    '& > ul': {
      '& > li': {
        '& > button':{
          p: 0,
          height: '24px',
          fontFamily: 'var(--font-poppins)',
          color: 'primary.textColor7',
          fontSize: '12px',
          fontWeight: '400',
          '&:hover:not(.Mui-disabled)': {
            color: 'primary.btnMainPressed',
            backgroundColor: 'primary.borderColor1'
          },
        },
        '& > .Mui-selected': {
          color: 'primary.btnMainPressed',
          backgroundColor: 'primary.borderColor1'
        }
      }
    }
  }
}

export  {muiStyles};