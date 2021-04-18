import React  from 'react';
import Post from './Post';
import List from '@material-ui/core/List';

function DashboardPosts({feed, setUser})
{

  return(
    <div>
      <List>
        {
          feed.map((post, index) => (
            <Post key={index} post={post} setUser={setUser} style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}/>
          ))
        }
      </List>
    </div>
  );
}

export default DashboardPosts;