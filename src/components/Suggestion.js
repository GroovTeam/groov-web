import React, { } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

function Suggestion( { suggestion } ) 
{
  return (
    <Box border={3} borderColor='primary.main' style={{paddingLeft: '10px', paddingBottom: '5px', flexDirection: 'column'}} >
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Avatar style={{alignSelf: 'center', marginRight: '1%'}}>
          H
        </Avatar>
        <h2>{suggestion.groupname}</h2>
      </div>
      
      <p>{suggestion.genre}
      </p>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Button variant='outlined' color='primary' size='small' style={{alignSelf: 'center'}}>Follow</Button>
      </div>
    </Box>
  );
} 

export default Suggestion;