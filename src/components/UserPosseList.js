import React from 'react';
import {Avatar, List, ListItem, ListItemText} from '@material-ui/core';

function UserPosseList({posses}) {

  return (
    <div>
      <List>
        {(posses !== undefined) ? (posses.map((value, index) => {
          return (
            <ListItem key={index}>
              <Avatar variant="square" src='https://picsum.photos/200/300'></Avatar>
              <ListItemText style={{marginLeft: '1vh'}} primary={value} />
            </ListItem>
          );
        })) : <ListItemText  primary={'Create or Join some posses. It\'s feeling a little empty here.'} /> }
      </List>
    </div>
  );

}

export default UserPosseList;