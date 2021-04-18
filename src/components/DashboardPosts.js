import React  from 'react';
import Post from './Post';

function DashboardPosts({feed})
{

  return(
    <div>
      {
        feed.map((post, index) => (
          <Post key={index} post={post} style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}/>
        ))
      }
    </div>
  );
}

export default DashboardPosts;