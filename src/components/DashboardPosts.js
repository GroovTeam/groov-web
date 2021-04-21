import React  from 'react';
import Post from './Post';
import { ListItemText } from '@material-ui/core';


function DashboardPosts({feed, setUser})
{
  return(
    <div>
      {
        (feed && feed.length) ? feed.map((post, index) => (
          <Post key={index} post={post} setUser={setUser} canBeDeleted={false} style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}/>
        )) : (<ListItemText primary={'Dashboard is empty, go follow some Posses to view posts'} ></ListItemText>)
      }
    </div>
  );
}

export default DashboardPosts;