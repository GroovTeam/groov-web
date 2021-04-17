import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';

function LikesList({likes}) {

  return (
    <div>
      <List>
        {(likes !== undefined) ? (likes.map((value, index) => {
          return (
            <ListItem key={index}>
              <ListItemText  primary={value.content} />
            </ListItem>
          );
        })) : <ListItemText  primary={'Like some posts. It\'s feeling a little empty here.'} /> }
      </List>
    </div>
  );

}

export default LikesList;