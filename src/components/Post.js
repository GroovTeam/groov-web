import React, {  } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
function Posts( { post } ) {
  return (
    <div>
      <Box border={3} borderColor='primary.main' style={{paddingLeft: '30px', paddingBottom: '10px', display: 'flex', flexDirection: 'column'}} >
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Avatar style= {{alignSelf: 'center', marginRight: '1%'}}>
           H
          </Avatar>
          <h1>{post.username}</h1>
        </div>

        <p>
          {post.content}
        </p>

        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Button variant='outlined' color='primary' style={{marginRight: '31%'}}>Like</Button>
          <Button variant='outlined' style={{marginRight: '25%'}}>Comment</Button>
          <Button variant='outlined' color='secondary'>Dislike</Button>
        </div>
      </Box>

      <div style={{paddingBottom: '5px'}}/>
    </div>
  );
}

export default Posts;