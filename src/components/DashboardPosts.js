/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Post from './Post';

let posts = [{ProfilePic: 'lol', content: 'ay yall listen to this new track', username: 'crakatoa'}, 
  {profilePic: 'lol', content: 'ay yall listen to this new track', username: 'crakatoa'}, 
  {profilePic: 'lol', content: 'ay yall listen to this new track', username: 'crakatoa'}];

function DashboardPosts({feed})
{
  useEffect(() => {
    if (feed !== null) 
      return posts.push(feed);
  }, []);

  return(
    <div>
      {
        posts.map((post, index) => (
          <Post key={index} post={post} style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}/>
        ))
      }
    </div>
  );
}

export default DashboardPosts;