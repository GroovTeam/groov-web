/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React  from 'react';
import Post from './Post';
import List from '@material-ui/core/List';


function DashboardPosts({feed})
{

  return(
    <div>
      {
        feed.map((post, index) => (
          <List key={index}>
            <Post post={post} style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}/>
          </List>
        ))
      }
    </div>
  );
}

export default DashboardPosts;