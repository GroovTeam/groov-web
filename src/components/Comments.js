import React, { useState } from 'react';
import {Avatar, Box, Button, IconButton, ListItem, ListItemText, Tooltip } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import likeComment from '../utils/likeComment';
import unlikeComment from '../utils/unlikeComment';
import ReplyModel from './ReplyModel';
import RepliesList from './RepliesList';
import {useHistory} from 'react-router-dom';
import '../styling/Comment.css';
import Tree from './commentTree/Tree';

function CommentLists({currComment, id, likeComment, unLikeComment, updateComments, alreadyLiked, setUser}) {
  const likeColor = '#4cc9f0';
  const disLikeColor = '#a9abaa';
  const [thumbsUp, setThumbsUp] = useState(alreadyLiked);
  const [thumbsDown, setThumbsDown] = useState(false);
  const [thumbUpColor, setThumbUpColor] = useState(alreadyLiked ? likeColor : disLikeColor);
  const [thumbDownColor, setThumbDownColor] = useState(disLikeColor);
  const [openModel, setModelOpen] = useState(false);
  const history = useHistory();
  
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
  
  const handleUsername = (event, username, setUser) => 
  {
    event.preventDefault();
    setUser(username);  
    history.push('/profile');
  };

  return (
    <div>
      <ListItem className='Item' >
        <div>
          <div className='UserDataArea' >
            <Avatar src={'https://picsum.photos/200/300'} ></Avatar>
            <div className='NameContent' >
              <ListItemText onClick={(event) => handleUsername(event, currComment.username, setUser)}
                secondary={'@' + currComment.username}
              ></ListItemText>
              <ListItemText
                primary={currComment.content}
              ></ListItemText>
            </div>
          </div>
          <ListItemText
            primary={(
              <div>
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
                <Tree name='Comment Replies' >
                  <RepliesList replies={currComment.replies} />
                </Tree> 
              </div>
            )}
          ></ListItemText>
          
        </div>
        
        
      </ListItem>
      <ReplyModel open={openModel} close={handleCommentModelClose} commentId={id} />
    </div>
  );
}

function Comments({comments, update, setUser}) {

  return (
    <div>
      <Tree name='Post Comments' >
        {(comments !== undefined && comments.length > 0) ? comments.map(comment => (
          <div key={comment.commentID}>
            <CommentLists 
              currComment={comment} id={comment.commentID} likeComment={likeComment} 
              unLikeComment={unlikeComment} updateComments={update} alreadyLiked={comment.alreadyLiked} 
              setUser={setUser}
            />
          </div>)) : (
          <ListItemText primary={'Post has no Comments.'}></ListItemText>
        ) } 
      </Tree>
    </div>
  );
}

export default Comments;