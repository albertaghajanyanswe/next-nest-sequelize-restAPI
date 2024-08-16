// todo: add and using all variables from theme
import { Theme } from '@mui/system';
import AuthImage from '../../../assets/auth.jpg';

const stylesWithTheme = (theme: Theme) => ({
  layout: {
    height: '100svh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(250,250,250,1)',
    // backgroundImage: `url(${loginBg})`
  },
  container: {
    width: '100%',
    [theme.breakpoints.up(768)]: {
      width: '568px'
    }
  },
  description: {
    fontWeight: 400,
    fontSize: 16,
    marginTop: '20px',
  },
  link: {
    fontWeight: '600',
    textDecoration: 'unset',
    alignSelf: 'center',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.btnMainHover,
    },
  },
  submit: {
    height: 50,
  },
});

export { stylesWithTheme };
