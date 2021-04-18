import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';

function UserPosseList({posses}) {

  return (
    <div>
      <List>
        {(posses !== undefined) ? (posses.map((value, index) => {
          return (
            <ListItem key={index}>
              <ListItemText  primary={value} />
            </ListItem>
          );
        })) : <ListItemText  primary={'Create or Join some posses. It\'s feeling a little empty here.'} /> }
      </List>
    </div>
  );

}

export default UserPosseList;