import { Theme } from "@mui/system";

export const stylesWithTheme = (theme: Theme) => ({
  footer: {
    height: 64,
    borderBottom: '1px solid #ebebeb',
    borderTop: '1px solid #ebebeb',
  },
  footerTexts: {
    padding: '6px 16px 6px 32px',
    alignSelf: 'center'
  },
  versionText: {
    marginBottom: '8px'
  },
  footerOpenedMode: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  footerClosedMode: {
    display: 'flex',
    alignItems: 'center',
    placeContent: 'center',
    height: 72,
  },
  footerTypographies: {
    fontSize: 12,
    color: theme.palette.primary.footerTextColor,
    textAlign: 'left',
    height: '15px'
  },
  footerCollapseAction: {
    color: theme.palette.primary.footerTextColor,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerActionOpenedMode: {
    marginRight: '23px'
  },
  footerActionBtn: {
    cursor: 'pointer',
    color: theme.palette.primary.sideBarIconColor,
    opacity: '0.8',
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
});