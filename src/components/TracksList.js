import React from 'react';
import {List, ListItemText} from '@material-ui/core';
import Post from './Post';



function TracksList({posts}) {
  console.log(posts);
  return (
    <div>
      <List>
        {(posts !== undefined) ? ( posts.map((value, index) => {
          return (
            <Post key={index} post={value} setUser={console.log} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} />
          );
        })) : <ListItemText  primary={'Create some tracks, It\'s feeling a little empty here.'} /> }
      </List>
    </div>
  );

}

export default TracksList;