import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, DialogActions, TextField }  from '@material-ui/core';
import reply from '../utils/reply';

function ReplyModel({open, close, commentId}) {
  const [replyStr, setReply] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setReply(value);
  };

  const handleCreatingReply = async () => {
    const body = {};
    body.content = replyStr;
    setReply('');
    reply(commentId, body)
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
        <DialogTitle>Make Reply</DialogTitle>
        <DialogContent >
          <TextField 
            label='Comment'
            value={replyStr}
            variant='outlined'
            name='comment'
            multiline={true}
            rows={4}
            onChange={(e) => handleChange(e)}
            style={{width: '100%'}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCreatingReply()}>
              Create Reply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ReplyModel;