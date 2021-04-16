import React, { useState } from 'react';
import { Box, Button, IconButton, List, ListItem, ListItemText, Tooltip } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import likeComment from '../utils/likeComment';
import unlikeComment from '../utils/unlikeComment';
import ReplyModel from './ReplyModel';
import RepliesList from './RepliesList';

function CommentLists({currComment, id, likeComment, unLikeComment, updateComments, alreadyLiked}) {
  const likeColor = '#4cc9f0';
  const disLikeColor = '#a9abaa';
  const [thumbsUp, setThumbsUp] = useState(alreadyLiked);
  const [thumbsDown, setThumbsDown] = useState(false);
  const [thumbUpColor, setThumbUpColor] = useState(alreadyLiked ? likeColor : disLikeColor);
  const [thumbDownColor, setThumbDownColor] = useState(disLikeColor);
  const [openReplies, setOpenReplies] = useState(false);
  const [openModel, setModelOpen] = useState(false);
  const [showHide, setShowHide] = useState('Show');
  
  const handleLikeToggle = async () => {

    if (!thumbsUp) {
      await likeComment(id);
    }
    else {
      await unLikeComment(id);
    }
    const color = thumbsUp ? disLikeColor : likeColor;
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
    const color = thumbsDown ? disLikeColor : likeColor;
    setThumbDownColor(color);
    setThumbsDown(!thumbsDown);
  };

  const handleCommentModelOpen = () => {
    setModelOpen(true);
  };

  const handleCommentModelClose = () => {
    setModelOpen(false);
    updateComments();
  };

  const toggleRepliesOpen = () => {
    const toggle = openReplies ? 'Show' : 'Hide';
    setShowHide(toggle);
    setOpenReplies(!openReplies);
  };

  return (
    <div>
      <ListItem style={{display: 'flex', justifyContent: 'space-between', borderLeft: '1px solid black'}}>
        <div>
          <ListItemText
            secondary={currComment.username}
          ></ListItemText>
          <ListItemText
            primary={(
              <div>
                {currComment.content}
                <Box>
                  <Tooltip title='Like'>
                    <IconButton onClick={() =>  handleLikeToggle()}>
                      <div style={{color: thumbUpColor}}>
                        <ThumbUpIcon></ThumbUpIcon>
                      </div>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Dislike'>
                    <IconButton onClick={() =>  handleunLikeToggle()}>
                      <div style={{color: thumbDownColor}}>
                        <ThumbDownIcon ></ThumbDownIcon>
                      </div>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Reply'>
                    <Button
                      onClick={() => handleCommentModelOpen()}
                    >Reply</Button>
                  </Tooltip>
                </Box>
              </div>
            )}
            secondary={(
              <div>
                <span onClick={() => toggleRepliesOpen()}>
                  {(openReplies) ? <ExpandLessIcon /> : <ExpandMoreIcon />} {showHide} replies
                </span>
                {openReplies ? <RepliesList replies={currComment.replies} /> : '' } 
              </div>
            
            )}
          ></ListItemText>
          
        </div>
        
        
      </ListItem>
      <ReplyModel open={openModel} close={handleCommentModelClose} commentId={id} />
    </div>
  );
}

function Comments({comments, expand, update}) {

  return (
    <div>
      {(expand) ? (
        <List >
          {(comments.length > 0 && comments !== undefined) ? (comments.map(comment => (
            <div key={comment}>
              <CommentLists 
                key={comment} currComment={comment} id={comment.commentID} likeComment={likeComment} 
                unLikeComment={unlikeComment} updateComments={update} alreadyLiked={comment.alreadyLiked} 
              />
            </div>
          ))) : ('Post has no comment sadly why not add some?')}
        </List>
      ) : ''}

      
    </div>
  );
}

export default Comments;