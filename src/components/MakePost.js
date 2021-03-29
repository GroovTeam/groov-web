/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import postApi from '../utils/FetchPost';
import FetchPost from '../utils/FetchPost';
import axios from 'axios';

async function postFetch(post) {
  console.log(post);
  let data = {
    poster: 'something',
    content: post,
    // liskes: ['one1'],
    tags: ['s'],
    // clipURL: 'url',
  };
  
  axios.post('http://127.0.0.1:5001/thepoopcrew-528e4/us-central1/api/posts', data)
    .then(response => response.json())
    .catch(error => console.error('Error: ', error));
}

function MakePost() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [finPost, setFinPost] = useState(text);
  const [postId, setPostId] = useState(null);
  let requestPost = '';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const UploadPost = () => {
    setOpen(false);
    console.log('text: ', text);
    setFinPost(text);
    requestPost = text;
    postFetch(text);
    console.log('final post: ', finPost);
    setText('');
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
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={UploadPost} color="primary" autoFocus>
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MakePost;