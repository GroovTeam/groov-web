import React from 'react';
import {List, ListItemText} from '@material-ui/core';
import Post from './Post';
function LikesList({likes}) {

  console.log(likes);

  return (
    <div>
      <List>
        {(likes) ? (likes.map((value, index) => {
          return (
            <Post key={index} post={value}  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} />
          );
        })) : <ListItemText  primary={'Like some posts. It\'s feeling a little empty here.'} /> }
      </List>
    </div>
  );

}

export default LikesList;