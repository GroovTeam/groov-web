import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';

function LikesList({likes}) {

  return (
    <List>
      {likes.map((like, index) => (
        <div style={{display: 'flex'}} key={index}>
          <ListItem divider={true} alignItems='flex-start'>
            <ListItemText 
              primary={like}
              style={{alignContent: 'flex-start', justifyItems: 'flex-start'}}
            >
            </ListItemText>
          </ListItem>
        </div>
      ))}
    </List>
  );

}

export default LikesList;