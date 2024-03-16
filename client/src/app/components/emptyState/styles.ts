import { DefaultTheme, Theme } from "@mui/system";

const muiStylesWithTheme = (theme?: Theme | DefaultTheme | undefined) => ({
  block: {
    borderRadius: '12px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.borderColor2',
    padding: '16px',
    mt: 2
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export { muiStylesWithTheme };