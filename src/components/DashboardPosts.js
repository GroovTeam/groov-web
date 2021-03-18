import React, { } from 'react';
import Post from './Post';

let posts = [{ profilePic: 'lol', text: 'ay yall listen to this new track', username: 'crakatoa' }, 
  { profilePic: 'lol', text: 'ay yall listen to this new track', username: 'crakatoa' }, 
  { profilePic: 'lol', text: 'ay yall listen to this new track', username: 'crakatoa' }];

function DashboardPosts()
{
  return(
    <div>
      {
        posts.map((post, index) => (
          <Post key={index} post={post}/>
        ))
      }
    </div>
  );
}


export default DashboardPosts;