/* eslint-disable no-unused-vars */
import React, {  } from 'react';
import Button from '@material-ui/core/Button';
import { Box, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ListChips from './ListChips';



function Posts({post}) {

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
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Posts;