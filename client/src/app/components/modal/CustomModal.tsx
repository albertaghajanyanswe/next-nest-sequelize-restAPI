import React, { FC } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModalCloseSVG from '@/assets/16/modal-close.svg';
import { muiStylesWithTheme } from './styles';
import { useTheme } from '@mui/system';

interface iProps {
  open: boolean;
  handleClose: (e: React.MouseEvent<HTMLElement>) => void;
  handleSubmit?: () => void;
  children: React.ReactNode;
  title?: string;
  leftBtnText?: string;
  rightBtnText?: string;
  withFooterAction?: boolean;
  withCloseButton?: boolean;
  sx?: any;
  sxTitle?: any;
  sxTitleRoot?: any;
  sxContentRoot?: any;
  withDividers?: boolean;
  closeBtnStyle?: 'primary' | 'secondary';
  footerActionNode?: React.ReactNode;
  additionalBlockInTitle?: React.ReactNode;
}
const CustomModal: FC<iProps> = ({
  open,
  handleClose,
  handleSubmit,
  children,
  title,
  leftBtnText = 'Cancel',
  rightBtnText = 'Submit',
  withFooterAction = true,
  withCloseButton = true,
  sx = {},
  sxTitle = {},
  sxTitleRoot = {},
  sxContentRoot = {},
  withDividers = true,
  closeBtnStyle = 'primary',
  footerActionNode,
  additionalBlockInTitle
}) => {

  const theme = useTheme();
  const muiStyles = muiStylesWithTheme(theme);
  return (
    <Box component="div">
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        sx={{ ...muiStyles.root, ...sx }}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {title &&
          <DialogTitle sx={{ ...muiStyles.modalTitleRoot, ...sxTitleRoot }}>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ ...muiStyles.modalTitle, ...sxTitle }}>{title}</Typography>
                {withCloseButton ? closeBtnStyle === 'primary' ? (
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton>) : (
                  <IconButton onClick={handleClose} sx={muiStyles.iconBtn} disableRipple>
                    <ModalCloseSVG />
                  </IconButton>
                ) : null}
              </Box>
              <Box>
                {additionalBlockInTitle && additionalBlockInTitle}
              </Box>
            </Box>
          </DialogTitle>
        }
        <DialogContent sx={{ ...muiStyles.contentRoot, padding: 0, ...sxContentRoot }} dividers={withDividers}>{children}</DialogContent>
        {footerActionNode ? (
          footerActionNode
        ) : (
          withFooterAction && <DialogActions>
            <Button onClick={handleClose} color='secondary'>
              {leftBtnText}
            </Button>
            <Button onClick={handleSubmit} color='primary'>
              {rightBtnText}
            </Button>
          </DialogActions>
        )}

      </Dialog>
    </Box>
  );
};

export default CustomModal;
