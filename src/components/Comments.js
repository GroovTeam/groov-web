/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import likeComment from '../utils/likeComment';
import unlikeComment from '../utils/unlikeComment';
import ReplyModel from './ReplyModel';

function CommentLists({currComment, id, likeComment, unLikeComment, updateComments}) {
  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);
  const [thumbUpColor, setThumbUpColor] = useState('#a9abaa');
  const [thumbDownColor, setThumbDownColor] = useState('#a9abaa');

  

  const handleLikeToggle = async () => {

    if (!thumbsUp) {
      await likeComment(id);
    }
    else {
      await unLikeComment(id);
    }
    const color = thumbsUp ? '#a9abaa' : '#12e7ff';
    setThumbUpColor(color);
    setThumbsUp(!thumbsUp);
  };

  const handleunLikeToggle = async () => {

    if (!thumbsDown) {
      await likeComment(id);
    }
    else {
      await unLikeComment(id);
    }
    const color = thumbsDown ? '#a9abaa' : '#12e7ff';
    setThumbDownColor(color);
    setThumbsDown(!thumbsDown);
  };

  const [openModel, setModelOpen] = useState(false);

  const handleCommentModelOpen = () => {
    setModelOpen(true);
  };

  const handleCommentModelClose = () => {
    setModelOpen(false);
    updateComments();
  };

  return (
    <div>
      <ListItem divider>
        <ListItemText
          primary={currComment.content}
        ></ListItemText>
        <Box style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <IconButton onClick={() =>  handleLikeToggle()}>
            <div style={{color: thumbUpColor}}>
              <ThumbUpIcon></ThumbUpIcon>
            </div>
          </IconButton>
          <IconButton onClick={() =>  handleunLikeToggle()}>
            <div style={{color: thumbDownColor}}>
              <ThumbDownIcon ></ThumbDownIcon>
            </div>
          </IconButton>
          <Button
            onClick={() => handleCommentModelOpen()}
          >Reply</Button>
        </Box>
      </ListItem>
      <ReplyModel open={openModel} close={handleCommentModelClose} commentId={id} />
    </div>
  );
}

function Comments({comments, expand, update}) {

  return (
    <div>
      {(expand) ? (
        <List>
          {(comments.length > 0 && comments !== undefined) ? (comments.map(comment => (
            <div key={comment}>
              <CommentLists key={comment} currComment={comment} id={comment.commentID} likeComment={likeComment} unLikeComment={unlikeComment} updateComments={update} />
            </div>
          ))) : ('Post has no comment sadly why not add some?')}
        </List>
      ) : ''}

      
    </div>
  );
}

export default Comments;