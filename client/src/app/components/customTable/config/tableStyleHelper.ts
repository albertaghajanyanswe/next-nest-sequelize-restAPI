const getCellPadding = (cellPaddingRight: string, cellPaddingLeft: string) => {
  const newWidth = {paddingRight: cellPaddingRight ?? '24px', paddingLeft: cellPaddingLeft ?? '24px', paddingTop: '12px', paddingBottom: '12px'};
  return newWidth;
}

const getWidth = (fieldWidth: string) => {
  const newWidth = fieldWidth ? { width: fieldWidth } : {width: '5%'};
  return newWidth;
}

export { getWidth, getCellPadding };
