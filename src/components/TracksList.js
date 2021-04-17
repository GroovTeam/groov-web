import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';

function TracksList({posts}) {

  return (
    <div>
      <List>
        {(posts !== undefined) ? (posts.map((value, index) => {
          return (
            <ListItem key={index}>
              <ListItemText  primary={value.content} />
            </ListItem>
          );
        })) : <ListItemText  primary={'Create some tracks, It\'s feeling a little empty here.'} /> }
      </List>
    </div>
  );

}

export default TracksList;