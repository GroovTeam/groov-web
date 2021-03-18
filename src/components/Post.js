import React, {  } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
function Posts( { post } ) {
  return (
    <div>
      <Box border={3} borderColor="primary.main" style={{ margin: 'auto', width: '50%', paddingLeft: '30px', paddingBottom: '5px', display: 'flex', flexDirection: 'column'}} >
        
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Avatar style= {{alignSelf: 'center', marginRight: '1%'}}>
           H
          </Avatar>
          <h1>{post.username}</h1>
        </div>

        <p >{post.text}
        </p>

        <div>
          <Button variant="outlined" color="primary" style={{ marginRight: '31%' }}>Like</Button>
          <Button variant="outlined" style={{ marginRight: '35%' }}>Comment</Button>
          <Button variant="outlined" color="secondary">Dislike</Button>
        </div>
      </Box>
      <div style={{ paddingBottom: '5px'  }}></div>
    </div>
  );
}

export default Posts;