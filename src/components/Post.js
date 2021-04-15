/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button } from '@material-ui/core';
import ListChips from './ListChips';
import getComments from '../utils/getComments';
import Comments from './Comments';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Posts({post}) {
  const [comments, setComments] = useState([]);
  const [expandComments, setExpand] = useState(false);

  const getPostComments = async () => {
    const id = post.postID;
    getComments(id)
      .then(res => {
        // we make sure our post has at least one comment
        if (res.data.results.length !== 0 && res.data) {
          setComments(res.data.results);
          console.log('comments are: ', comments);
        }
      })
      .catch(console.error);
  };

  const handleCommentToggle = () => {
    setExpand(!expandComments);
  };

  useEffect(() => {
    getPostComments();
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
              <Button>Like</Button>
              <Button>Comment</Button>
              <Button>Dislike</Button>
            </Box>
            <div onClick={() => handleCommentToggle()}>
              {(expandComments) ? <ExpandLessIcon /> : <ExpandMoreIcon /> } Show Comments
            </div>
            <Comments comments={comments} expand={expandComments} />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Posts;