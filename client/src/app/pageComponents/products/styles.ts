import { Theme } from "@mui/system";

const muiStylesWithTheme = (theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
  tableRoot: {
    p: '0 24px',
    minWidth: '276px',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  btnRoot: {
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    mt: '120px'
  },
  viewAll: {
    whiteSpace: 'nowrap',
  },
  blockTitle: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 700,
    color: 'primary.textColor1',
  },

  cardContainer: {
    display: 'flex',
    justifyContent: 'start',
    maxWidth: '992px',
    flexWrap: 'wrap',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '748px'
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '500px'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '7497%8px',
      display: 'flex',
      flexDirection: 'column'
    },
  }
});

export { muiStylesWithTheme };