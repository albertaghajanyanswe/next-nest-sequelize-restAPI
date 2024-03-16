const muiStyles = {
  paperRootNoBorder: {
    boxShadow: 'none',
    '& .MuiTableContainer-root': {
      '& .MuiTable-root': {
        '& .MuiTableHead-root': {
          '& .MuiTableRow-root': {
            '& > th': {
              borderBottom: 'none'
            }
          }
        },
        '& .MuiTableBody-root': {
          '& .MuiTableRow-root': {
            '& > td': {
              borderBottom: 'none'
            }
          }
        }
      }
    }
  },
  tableContainer: {
    borderRadius: '24px 24px 0 0'
  },
  tableRow: {
  },
  table: {
    minWidth: 460,
  },
  tableBody: {
    display: 'flex',
    justifyContent: 'center'
  },
  tableCellAction: {
    padding: '6px 16px',
    textAlign: 'center',
    color: 'primary.main'
  },
  clickableRow: {
    cursor: 'pointer',
    '&:hover': {
      background: '#f1f7ff'
    }
  },
  border: {
    '& .MuiPaper-root .MuiTableContainer-root .MuiTable-root .MuiTableHead-root .MuiTableRow-root > th': {
      borderBottom: 'inherit',
      backgroundColor: 'inherit'
    }
  },
  customScroll: {
    '&::-webkit-scrollbar': {
      width: '3px',
      height: '24px'
    },
    '&::-webkit-scrollbar:vertical': {
      width: '3px',
      height: '24px'
    },
    '&::-webkit-scrollbar:horizontal': {
      width: '3px',
      height: '6px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: `inset 0 0 5px white`,
      borderRadius: '100px'
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#B5C3D3',
      borderRadius: '100px'
    },
  }
};
export { muiStyles };