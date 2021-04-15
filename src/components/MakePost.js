import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import FormPost from './FormPost';
import RecordAudio from '../components/RecordAudio';

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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Post
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='lg'
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">Post</DialogTitle>
        <DialogContent>
          <RecordAudio/>
          <FormPost dialogOpen={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MakePost;