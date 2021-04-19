import React  from 'react';
import Post from './Post';

function DashboardPosts({feed, setUser})
{

  return(
    <div>
      {
        feed.map((post, index) => (
          <Post key={index} post={post} setUser={setUser} style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}/>
        ))
      }
    </div>
  );
}

export default DashboardPosts;