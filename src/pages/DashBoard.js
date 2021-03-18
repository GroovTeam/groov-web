import React from 'react';
import Nav from '../components/Nav';
import DashboardPosts from '../components/DashboardPosts';
import SuggestionList from '../components/SuggestionList';

function DashBoard() {
  return (
    <div>
      <Nav  />
      <div style={{marginLeft: 80}}>
        <h2>DashBoard</h2>
        
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          <div style={{width: '20%'}}/>

          <div style={{width: '50%'}}>
            <DashboardPosts>
            </DashboardPosts>
          </div>

          <div style={{width: '18%', paddingLeft:'30px'}}>
            <SuggestionList style={{alignSelf: 'flex-end'}}>
            </SuggestionList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;