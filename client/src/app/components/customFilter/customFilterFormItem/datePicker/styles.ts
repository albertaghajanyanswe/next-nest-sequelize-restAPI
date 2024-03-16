const muiStyles = {
  fieldContainer: {
    mb: 0,
    '& > .MuiFormControl-root': {
      '& > .MuiFormLabel-root': {
        color: 'primary.textColor6',
        fontSize: '14px',
        mt: '2px'
      }
    }
  },
  formControl: {
    width: {xs: 'calc(100% - 24px)', sm: '100%'},
  },
  customTextField: {
    "& input::placeholder": {
      fontSize: "14px",
      fontWeight: 500,
    },
  },
  box: {
    minWidth: "200px",
    marginRight: "16px",
  },
  textField: {
    '& > .MuiOutlinedInput-root': {
      borderRadius: '8px',
    }
  }
};

export { muiStyles };
