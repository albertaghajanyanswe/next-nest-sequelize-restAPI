import React, { FC } from 'react';
import { Box, Tooltip, IconButton, FormLabel } from '@mui/material';
import InfoSvg from '@/assets/systemMessage/info.svg';

import { muiStyles } from './styles';
import Image from 'next/image';

interface iProps {
  title: string;
  helperTooltip?: string
  sxLabel?: any;
  sx?: any;
  sxTooltip?: any;
}
const FormFieldTitle: FC<iProps> = ({ title, helperTooltip = '', sxLabel = {}, sx = {}, sxTooltip = {} }) => {

  return (
    <Box component="div" sx={{ ...muiStyles.titleBlock, ...sx }}>
      <FormLabel sx={{ ...muiStyles.title, ...sxLabel }}> {title} </FormLabel>

      {helperTooltip &&
        <Tooltip PopperProps={{ sx: { ...muiStyles.tooltip, ...sxTooltip } }} title={helperTooltip}>
          <IconButton sx={{ display: 'flex', ml: '4px', p: 0 }} disableRipple>
            <InfoSvg />
          </IconButton>
        </Tooltip>
      }
    </Box>
  );
}

export default FormFieldTitle;