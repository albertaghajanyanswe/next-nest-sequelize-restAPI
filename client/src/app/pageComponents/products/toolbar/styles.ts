const muiStyles = {
  root: {
    paddingLeft: { xs: 0 },
    paddingRight: { xs: 0 },
    p: 0,
    textAlign: 'start',
    justifyContent: 'space-between',
    minHeight: {xs: '40px'},
    display: 'flex',
    flexGrow: 1,
    mb: 3
  },
  filters: {
    width: '100%',
    display: 'flex',
    'WebkitFlexWrap': 'wrap',
    flexWrap: 'wrap',
    '& > div:not(:last-child)': {
      mr: 2
    }
  },
  actions: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignSelf: 'start',
  },
  headerText: {
    alignSelf: 'center',
    color: 'primary.main',
    fontSize: '14px',
    fontWeight: '400',
  },
};
export { muiStyles };