const muiStyles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '32px 40px',
    flexDirection: {xs: 'column', sm: 'column', md: 'row'},
    backgroundColor: 'white',
    minWidth: 'max-content',
  },
  leftRoot: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  rightRoot: {
    display: 'flex',
    justifyContent: {xs: 'center', sm: 'center', md: 'space-between'},
    flexDirection: {xs: 'column', sm: 'column', md: 'row'},
    alignItems: 'center'
  },
  title: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '36px',
    lineHeight: '40px',
    fontWeight: 400,
    color: 'secondary.textColor1',
    mr: 3,
  },
  date: {
    fontFamily: 'var(--font-poppins)',
    fontSize: '16px',
    lineHeight: '32px',
    fontWeight: 400,
    color: 'primary.textColor4',
    mt: 1
  },
  search: {
    mr: 2,
    alignItems: 'center',
    padding: '12px',
    background: '#FFFFFF',
    borderWidth: '1.5px',
    borderStyle: 'solid',
    borderColor: 'primary.borderColor1',
    width: 'fit-content'
  },
};
export { muiStyles };
