import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, DialogActions, TextField }  from '@material-ui/core';
import postComment from '../utils/postComment';

function CommentModel({open, close, postId}) {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setComment(value);
  };

  const handleCreatingComment = async () => {
    const body = {};
    body.content = comment;
    setComment('');
    postComment(postId, body)
      .then(() => close())
      .catch(console.error);
  };
  
  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        maxWidth='sm'
        fullWidth={true}
        
      >
        <DialogTitle>Make Comment</DialogTitle>
        <DialogContent >
          <TextField 
            label='Comment'
            value={comment}
            variant='outlined'
            name='comment'
            multiline={true}
            rows={4}
            onChange={(e) => handleChange(e)}
            style={{width: '100%'}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCreatingComment()}>
              Create Comment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CommentModel;