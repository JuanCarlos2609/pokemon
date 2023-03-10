import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent
} from '@material-ui/core';
import { useModal } from './hooks/useModal';
import { useStyles } from './ModalStyles';

const Modal = () => {
  const classes = useStyles();
  const { modalState, handleCloseModal } = useModal();
  const {
    show,
    title,
    body,
    actionButtons,
    configProps = {}
  } = modalState;
  const {
    maxWidth,
    className,
    titleClassName,
    showDividers,
    ...otherProps
  } = configProps;

  return (
    <Dialog
      open={show}
      aria-labelledby="app-modal"
      onClose={handleCloseModal}
      maxWidth={maxWidth}
      className={classes.dialog}
      {...otherProps}
    >
      {title && <DialogTitle className={titleClassName}>{title}</DialogTitle>}

      <DialogContent dividers={showDividers}>{body}</DialogContent>

      {actionButtons && <DialogActions>{actionButtons}</DialogActions>}
    </Dialog>
  );
};

export { Modal };
