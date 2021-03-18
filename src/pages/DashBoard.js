import React from 'react';
import Nav from '../components/Nav';
import DashboardPosts from '../components/DashboardPosts';
function DashBoard() {
  return (
    <div>
      <Nav  />
      <div style={{marginLeft: 80}}>
        <h2>DashBoard</h2>
        <div>
          <DashboardPosts>

          </DashboardPosts>

        </div>
      </div>
      
    </div>
  );
}

export default DashBoard;