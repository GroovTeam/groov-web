import React from 'react';
import {List, ListItemText} from '@material-ui/core';
import Post from './Post';

function TracksList({posts, user, updateFeed}) {
  console.log(posts);
  console.log('cringy');
  const canBeDeleted = (user === undefined) ? true : false;
  console.log('can be deleteed', canBeDeleted);

  return (
    <div>
      <List>
        {(posts !== undefined) ? ( posts.map((value, index) => (
          <div key={index}>
            <Post key={index} post={value} canBeDeleted={canBeDeleted} setUser={console.log} updateTracks={updateFeed} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} />
          </div>
        ))) : <ListItemText  primary={'Create some tracks, It\'s feeling a little empty here.'} /> }
      </List>
    </div>
  );

}

export default TracksList;