/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, IconButton } from '@material-ui/core';
import ListChips from './ListChips';
import getComments from '../utils/getComments';
import Comments from './Comments';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCommentIcon from '@material-ui/icons/AddComment';
import likePost from '../utils/likePost';
import unlikePost from '../utils/unlikePost';
import postComment from '../utils/postComment';
import LikeButton from './LikeButton';
import CommentModel from './CommentModel';

function Posts({post}) {
  const [comments, setComments] = useState([]);
  const [expandComments, setExpand] = useState(false);
  const [likes, setLikes] = useState((post.likes === undefined) ? 0 : post.likes.length);
  const [openModel, setModelOpen] = useState(false);
  const id = post.postID;

  const getPostComments = async () => {
    getComments(id)
      .then(res => {
        // we make sure our post has at least one comment
        if (res.data.results.length !== 0 && res.data) {
          setComments(res.data.results);
        }
      })
      .catch(console.error);
  };


  const handleCommentModelOpen = () => {
    setModelOpen(true);
  };

  const handleCommentModelClose = () => {
    setModelOpen(false);
    getPostComments();
  };


  const handleCommentToggle = () => {
    setExpand(!expandComments);
  };

  useEffect(() => {
    getPostComments();
    
    const likePost = async (id) => {
      console.log('postid: ', id);
      console.log('liking post');
      setLikes(likes + 1);
      likePost(id)
        .then(() => console.log('liking post: ', post.content, ' post id is: ', id))
        .catch(error => {console.log(error); setLikes(likes - 1);});
    };

    const unlikePost = async (id) => {
      console.log('unliking post');
      setLikes(likes - 1);
      unlikePost(id)
        .then(() => console.log('unliking post: ', post.content, ' post id is: ', id))
        .catch(error => {console.log(error); setLikes(likes + 1);});
    };
  }, []);

  return (
    <div>
      <Box  borderBottom={2}>
        <div style={{margin: '1vh'}}>
          <div style={{display: 'flex'}}>
            <Box  style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <Avatar style={{height: '5vh', margin: '.5vh', width: '5vh'}} src={post.image}></Avatar>
              <h3>{post.username}</h3>
              <ListChips variant={'outlined'} size={'small'} chips={post.posses} />
            </Box>
          </div>
          <div style={{display: 'flex' , flexDirection: 'column'}}>
            <h2 style={{alignSelf: 'center', fontWeight: 'normal'}}>{post.content}</h2>
            <Box style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <LikeButton id={post.postID} likes={likes} onLike={likePost} onUnLike={unlikePost} alreadyLiked={post.alreadyLiked} />
              <IconButton onClick={() => handleCommentModelOpen()}>
                <AddCommentIcon></AddCommentIcon>
              </IconButton>
            </Box>
            <div onClick={() => handleCommentToggle()}>
              {(expandComments) ? <ExpandLessIcon /> : <ExpandMoreIcon /> } Show Comments
            </div>
            <Comments comments={comments} expand={expandComments} update={getPostComments} />
            <CommentModel open={openModel} close={handleCommentModelClose} postId={id} />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Posts;