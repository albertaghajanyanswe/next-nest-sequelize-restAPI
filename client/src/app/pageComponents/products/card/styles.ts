import { globalMuiStylesWithTheme } from "@/app/globalMuiStyles";
import { Theme } from "@mui/system";

const muiStylesWithTheme = (theme: Theme) => ({
  favoriteSVG: {
    '& > svg': {
      '& > path': {
        ...globalMuiStylesWithTheme(theme).fill_DA9C50
      },
    },
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '230px',
    border: '1px solid rgb(215, 217, 222)',
    margin: '0 8px 24px 8px',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      width: '98%',
      minHeight: '165px',
    },
  },
  cardImage: {
    width: '230px',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '140px',
      minHeight: '165px',
    },
  },
  cardImageItem: {
    width: '228px',
    height: 'auto',
    opacity: 0.9,
    '&:hover': {
      transition: 'opacity 0.25s ease-out 0s, color 0.25s ease-out 0s',
      opacity: 1,
    },
    [theme.breakpoints.down('sm')]: {
      width: '140px',
      minHeight: '163px',
    },
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px 16px 16px 16px',
    minHeight: '197px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minHeight: '165px',
    },
  },
  cardTitle: {
    fontSize: '14px',
    fontWeight: '900',
    marginBottom: '8px',
  },
  cardDescription: {
    fontSize: '12px',
    fontWeight: '400',
    marginBottom: '14px',
    overflow: 'hidden',
  },
  detailsDescription: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& > p': {
      fontWeight: 700,
      fontSize: '11px',
      margin: 0,
    }
  },
  cardDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }
})

export { muiStylesWithTheme }
