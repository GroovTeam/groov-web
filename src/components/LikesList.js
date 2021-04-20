import React from 'react';
import {Avatar, Box, Chip, List, ListItemText} from '@material-ui/core';

function LikesList({likes}) {

  return (
    <div>
      <List>
        {(likes) ? (likes.map((value, index) => {
          return (
            <Box key={index} borderBottom={2}>
              <div style={{margin: '2vh'}}>
                <div>
                  <div className='UserInfoContainer' >
                    <Avatar className='UserImage' src={value.image}></Avatar>
                    <div className='TagsUserName' >
                      <h3 >@{value.username}</h3>
                      <div className='PosseChips' >
                        {(value.posses !== undefined) ? (value.posses.map((chip, index) => (
                          <Chip variant='outlined' size='small' style={{margin: '.3vh'}} key={index} label={chip} />
                        ))): 'This Post doesn\'t have any Posses'}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='PostContentContainer' >
                  <h2 className='Content' >{value.content}</h2>
                </div>
              </div>
            </Box>
          );
        })) : <ListItemText  primary={'Like some posts. It\'s feeling a little empty here.'} /> }
      </List>
    </div>
  );

}

export default LikesList;