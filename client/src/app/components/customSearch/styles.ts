
import { DefaultTheme, Theme } from "@mui/system";
import { globalMuiStylesWithTheme } from "../../globalMuiStyles";

const muiStylesWithTheme = (theme?: Theme | DefaultTheme | undefined) => ({
  rightRoot: {
    display: 'flex',
    justifyContent: {xs: 'center', sm: 'center', md: 'space-between'},
    flexDirection: {xs: 'column', sm: 'column', md: 'row'},
    alignItems: 'center'
  },
  searchInput: {
    fontWeight: 400,
    '& > .MuiOutlinedInput-root': {
      borderRadius: '8px',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      '& > input': {
        padding: '12.5px 14px'
      },
      '& > fieldset': {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'primary.borderColor2',
      },
      '& > .MuiOutlinedInput-input': {
        '&::placeholder': {
          fontWeight: 400,
          color: 'primary.textColor6'
        }
      },
    },
    width: '100%',
    mr: 3
  },
  search: {
    mr: {xs: 0, sn: 0, md: 2},
    mt: {xs: 2, sn: 2, md: 0},
    alignItems: 'center',
    padding: '10px',
    background: '#FFFFFF',
    borderWidth: '1.5px',
    borderStyle: 'solid',
    borderColor: 'primary.borderColor1',
    width: 'fit-content',
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
});
export { muiStylesWithTheme };
