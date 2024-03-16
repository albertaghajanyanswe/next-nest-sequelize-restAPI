const muiStyles = {
  fieldContainer: {
    mb: 0,
  },
  customTextField: {
    "& input::placeholder": {
      fontSize: "14px",
      fontWeight: 500,
      color: 'primary.textColor6'
    },
    '& > .MuiOutlinedInput-input': {
      '&::placeholder': {
        color: 'primary.textColor6'
      }
    },
    '& > .MuiOutlinedInput-root': {
      borderRadius: '8px',
      pr: 2
    },
  },
  box: {
    minWidth: "200px",
    marginRight: "16px",
  },
  formControl: {
    width: {xs: 'calc(100% - 24px)', sm: '100%'}
  }
};

export { muiStyles };
