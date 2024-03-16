const muiStyles = {
  fieldContainer: {
    mt: '20px',
    mb: 0
  },
  phone: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputField: {
    width: '100%',
    '& > .MuiOutlinedInput-input': {
      '&::placeholder': {
        color: 'primary.textColor6'
      }
    },
    '& > .MuiOutlinedInput-root': {
      fontFamily: 'var(--font-poppins)',
      fontSize: '14px',
      borderRadius: '8px',
      paddingLeft: '12px',
      '& > .MuiInputAdornment-root': {
        '&> .MuiButtonBase-root': {
          padding: 0,
          '& > span': {
            height: '100%',
            '& >picture': {
              height: '100%',
              '& > img': {
                borderRadius: '50%',
                height: '100%'
              }
            }
          }
        }
      },
      '& > input': {
        padding: '14px 16px 14px 0',
        '&::placeholder': {
          color: 'primary.textColor6'
        },
      }
    },
    '& > .MuiInputBase-sizeSmall': {
      '& > input': {
        padding: '10px 16px 10px 0',
        '&::placeholder': {
          color: 'primary.textColor6'
        },
      }
    }
  },
  errorIcon: {
    display: 'flex',
    cursor: 'pointer',
    position: 'absolute',
    right: '16px',
    top: '8px',
    width: 'fit-content',
    height: 'fit-content',
  },
  popover: {
    '& > .MuiPaper-root': {
      p: 1,
      mt: 1,
      maxHeight: '224px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary.borderColor1',
      boxShadow: '0px 4px 16px rgba(181, 195, 211, 0.25)',
      borderRadius: '12px',
      '&::-webkit-scrollbar': {
        width: '4px',
        height: '24px'
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: `inset 0 0 5px white`,
        borderRadius: '10px'
      },
  
      '&::-webkit-scrollbar-thumb': {
        background: '#B5C3D3',
        borderRadius: '10px'
      },
      '& > ul': {
        '& > li': {
          padding: '8px 16px 8px 12px',
          borderRadius: '4px',
          '&:not(:last-child)': {
            mb: '4px',
          },
          pl: '12px',
          '& > .MuiListItemIcon-root': {
            width: '20px',
            height: '20px',
            minWidth: '20px',
            marginRight: '16px',
            '& > span': {
              '& > picture': {
                height: '20px',
                '& > img': {
                  height: '20px',
                  borderRadius: '50%'
                }
              }
            }
          }
        }
      }
    }
  },
  descriptionBlock: {
    mt: '2px'
  },
  descriptionText: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400,
    color: 'primary.textColor3'
  },
}
export { muiStyles }