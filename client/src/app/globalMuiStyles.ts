import { DefaultTheme, Theme } from '@mui/system';

const globalMuiStyles = {
  font_12_16_400: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400
  },
  font_12_16_500: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 500
  },
  font_12_16_600: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 600
  },
  font_12_16_700: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 700
  },
  font_14_16_400: {
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 400
  },
  font_14_16_500: {
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 500
  },
  font_14_16_600: {
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 600
  },
  font_14_16_700: {
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 700
  },
  font_14_20_500: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 500
  },
  font_14_20_400: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400
  },
  font_14_20_700: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 700
  },
  font_16_20_400: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 400
  },
  font_16_20_500: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 500
  },
  font_16_20_600: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 600
  },
  font_16_20_700: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 700
  },
  font_16_24_300: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 300
  },
  font_16_24_400: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400
  },
  font_16_24_500: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500
  },
  font_16_24_600: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 600
  },
  font_16_24_700: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 700
  },
  font_18_24_400: {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 400
  },
  font_18_24_500: {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 500
  },
  font_18_24_600: {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 600
  },
  font_18_24_700: {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 700
  },
  font_24_32_400: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 400
  },
  font_24_32_500: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 500
  },
  font_24_32_600: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 600
  },
  font_24_32_700: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 700
  },
  font_36_40_400: {
    fontSize: '36px',
    lineHeight: '40px',
    fontWeight: 400
  },
  font_36_40_500: {
    fontSize: '36px',
    lineHeight: '40px',
    fontWeight: 500
  },
  font_36_40_600: {
    fontSize: '36px',
    lineHeight: '40px',
    fontWeight: 600
  },
  font_36_40_700: {
    fontSize: '36px',
    lineHeight: '40px',
    fontWeight: 700
  },
  divider: {
    borderColor: 'primary.borderColor2',
    "&::before": {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'primary.borderColor2',
    },
    "&::after": {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'primary.borderColor2',
    },
  },
  modalRoot_576: {
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
  modalRoot_722: {
    '& .MuiPaper-root': {
      // p: 4,
      maxWidth: '722px',
      boxShadow: 'none',
      borderRadius: '24px',
      height: '70%'
    },
    backdropFilter: "blur(12px)",
    zIndex: 1000,
    //other styles here
  },
  modalTitleRoot: {
    p: 0,
    mb: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '24px',
    color: 'primary.textColor1',
  },
  scroll: {
    // NOTE: custom scroll bar (not worked for mozila)
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
  },

  accordion: {
    backgroundColor: 'primary.lightBG3',
    boxShadow: 'none',
    width: '100%',
    '&.MuiPaper-root': {
      borderRadius: '24px',
    },
    '& > .MuiAccordionSummary-root': {
      borderRadius: '24px',
      minHeight: 'fit-content',
    },
    '& > .MuiAccordionSummary-root.Mui-expanded': {
      minHeight: 'fit-content',
    }
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
  accordionDetail: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    color: 'primary.textColor1',
  },
  textField: {
    '& > .MuiOutlinedInput-input': {
      '&::placeholder': {
        color: 'primary.textColor6'
      }
    },
    '& > .MuiOutlinedInput-root': {
      borderRadius: '8px',
    },
  },
  textFieldArea: {
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
  arabicTextField: {
    '& > .MuiOutlinedInput-input': {
      textAlign: 'right',
      direction: 'rtl',
      '&::placeholder': {
        color: 'primary.textColor6',
      }
    },
    '& > .MuiOutlinedInput-root': {
      borderRadius: '8px',
    },
  },
  textFieldSearch: {
    '& > .MuiOutlinedInput-root': {
      borderRadius: '8px',
      '& > .MuiOutlinedInput-input': {
        '&::placeholder': {
          color: 'primary.textColor6'
        }
      },
    },
  },
};

const globalMuiStylesWithTheme = (theme: Theme | DefaultTheme | undefined) => ({
  scroll_3_24_B5C3D3: {
    // NOTE: custom scroll bar (not worked for mozila)
    '&::-webkit-scrollbar': {
      width: '3px',
      height: '24px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: `inset 0 0 5px white`,
      borderRadius: '10px'
    },

    '&::-webkit-scrollbar-thumb': {
      background: (theme as Theme)?.palette?.primary?.scrollBG,
      borderRadius: '10px'
    },
  },
  scroll_3_24_DFE8F3: {
    // NOTE: custom scroll bar (not worked for mozila)
    '&::-webkit-scrollbar': {
      width: '3px',
      height: '24px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: `inset 0 0 5px white`,
      borderRadius: '10px'
    },

    '&::-webkit-scrollbar-thumb': {
      background: (theme as Theme)?.palette?.primary?.borderColor2,
      borderRadius: '10px'
    },
  },
  scroll_4_24_B5C3D3: {
    // NOTE: custom scroll bar (not worked for mozila)
    '&::-webkit-scrollbar': {
      width: '4px',
      height: '24px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: `inset 0 0 5px white`,
      borderRadius: '10px'
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: (theme as Theme)?.palette?.primary?.scrollBG,
      borderRadius: '10px'
    },
  },
  selectField: {
    borderRadius: '8px',
    '& > .MuiOutlinedInput-input': {
      '&::placeholder': {
        color: 'primary.textColor8',
        fontSize: '14px',
      },
      '& > em': {
        color: `${(theme as Theme)?.palette?.primary?.textColor8}!important`,
        fontSize: '14px',
      }
    },
  },
  dateField: {
    '& > .MuiOutlinedInput-root': {
      borderRadius: '8px',
      '&::placeholder': {
        color: `${(theme as Theme)?.palette?.primary?.textColor6}!important`
      },
      '& > .MuiOutlinedInput-input': {
        '&::placeholder': {
          color: `${(theme as Theme)?.palette?.primary?.textColor6}!important`
        }
      },
    },
  },

  textField: {
    '& > .MuiOutlinedInput-input': {
      '&::placeholder': {
        color: 'primary.textColor6'
      }
    },
    '& > .MuiOutlinedInput-root': {
      borderRadius: '8px',
    },

    '& > .Mui-disabled': {
      '&::placeholder': {
        color: `${(theme as Theme)?.palette?.primary?.scrollBG}!important`,
        WebkitTextFillColor: `${(theme as Theme)?.palette?.primary?.scrollBG}!important`
      }
    }
  },

  stroke_457BAC: {
    stroke: (theme as Theme)?.palette?.primary?.btnMainHover
  },
  stroke_F1F4FA: {
    stroke: (theme as Theme)?.palette?.primary?.borderColor1
  },
  stroke_226395: {
    stroke: (theme as Theme)?.palette?.primary?.btnMainPressed
  },
  stroke_9FAEBD: {
    stroke: (theme as Theme)?.palette?.primary?.btnMainPressed
  },
  stroke_CFE3F2: {
    stroke: (theme as Theme)?.palette?.primary?.btnMainDisabled
  },
  stroke_728191: {
    stroke: (theme as Theme)?.palette?.primary?.textColor3
  },
  stroke_004B7F: {
    stroke: (theme as Theme)?.palette?.primary?.btnMain
  },
  stroke_C62840: {
    stroke: (theme as Theme)?.palette?.primary?.error
  },
  stroke_B5C3D3: {
    stroke: (theme as Theme)?.palette?.primary?.scrollBG
  },
  stroke_D04C60: {
    stroke: (theme as Theme)?.palette?.primary?.red5
  },
  stroke_d16374: {
    stroke: (theme as Theme)?.palette?.primary?.red4
  },
  stroke_d16d7c: {
    stroke: (theme as Theme)?.palette?.primary?.red5
  },
  stroke_cb394f: {
    stroke: (theme as Theme)?.palette?.primary?.red6
  },
  stroke_ECF4F9: {
    stroke: (theme as Theme)?.palette?.primary?.textColor2
  },
  stroke_009E6E: {
    stroke: (theme as Theme)?.palette?.primary?.green3
  },
  stroke_8998A8: {
    stroke: (theme as Theme)?.palette?.primary?.textColor7
  },

  fill_457BAC: {
    fill: (theme as Theme)?.palette?.primary?.btnMainHover
  },
  fill_F1F4FA: {
    fill: (theme as Theme)?.palette?.primary?.borderColor1
  },
  fill_226395: {
    fill: (theme as Theme)?.palette?.primary?.btnMainPressed
  },
  fill_9FAEBD: {
    fill: (theme as Theme)?.palette?.primary?.btnMainPressed
  },
  fill_CFE3F2: {
    fill: (theme as Theme)?.palette?.primary?.btnMainDisabled
  },
  fill_728191: {
    fill: (theme as Theme)?.palette?.primary?.textColor3
  },
  fill_004B7F: {
    fill: (theme as Theme)?.palette?.primary?.btnMain
  },
  fill_C62840: {
    fill: (theme as Theme)?.palette?.primary?.error
  },
  fill_B5C3D3: {
    fill: (theme as Theme)?.palette?.primary?.scrollBG
  },
  file_D04C60: {
    fill: (theme as Theme)?.palette?.primary?.red5
  },
  fill_d16374: {
    fill: (theme as Theme)?.palette?.primary?.red4
  },
  fill_d16d7c: {
    fill: (theme as Theme)?.palette?.primary?.red5
  },
  fill_cb394f: {
    fill: (theme as Theme)?.palette?.primary?.red6
  },
  fill_ECF4F9: {
    fill: (theme as Theme)?.palette?.primary?.textColor2
  },
  fill_009E6E: {
    fill: (theme as Theme)?.palette?.primary?.green3
  },
  fill_8998A8: {
    fill: (theme as Theme)?.palette?.primary?.textColor7
  },
  fill_DA9C50: {
    fill: (theme as Theme)?.palette?.primary?.orange3
  },
})
export { globalMuiStyles, globalMuiStylesWithTheme };
