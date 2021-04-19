import React  from 'react';
import Post from './Post';

function DashboardPosts({feed, setUser, setPosse})
{
  return(
    <div>
      {
        (feed !== undefined && feed.length > 1) ? feed.map((post, index) => (
          <Post key={index} post={post} setUser={setUser} setPosse={setPosse} style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}/>
        )) : 'Dashboard is empty, go follow some Posses to view posts'
      }
    </div>
  );
}

export default DashboardPosts;