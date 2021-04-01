import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import FormPost from './FormPost';


function MakePost({updateFeed}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    updateFeed();
    setOpen(false);
  };

  return (
    <div>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <AddCircleOutlineIcon></AddCircleOutlineIcon>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='lg'
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">Post</DialogTitle>
        <DialogContent>
          <FormPost dialogOpen={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MakePost;