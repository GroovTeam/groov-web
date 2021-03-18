import React, { } from 'react';
import Post from './Post';

let posts = [{ProfilePic: 'lol', text: 'ay yall listen to this new track', username: 'crakatoa'}, 
  {profilePic: 'lol', text: 'ay yall listen to this new track', username: 'crakatoa'}, 
  {profilePic: 'lol', text: 'ay yall listen to this new track', username: 'crakatoa'}];

function DashboardPosts()
{
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