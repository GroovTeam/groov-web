import React from 'react';
import Nav from '../components/Nav';
import DashboardPosts from '../components/DashboardPosts';
import PostBtn from '../components/MakePost';

function DashBoard() {
  return (
    <div>
      <Nav  />
      <div style={{marginLeft: 80}}>
        <h2>DashBoard</h2>
        <div>
          <DashboardPosts>

          </DashboardPosts>
          <PostBtn></PostBtn>

        </div>
      </div>
      
    </div>
  );
}

export default DashBoard;