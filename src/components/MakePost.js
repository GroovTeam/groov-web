/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


function PostBtn() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Post
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='lg'
        fullWidth='true'
      >
        <DialogTitle id="alert-dialog-title">Post</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form>
              <TextField
                id="outlined-multiline-static"
                label="Post"
                multiline
                rows={6}
                placeholder="Enter Post"
                variant="outlined"
                fullWidth="true"
              />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PostBtn;