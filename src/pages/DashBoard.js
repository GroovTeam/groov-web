/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import DashboardPosts from '../components/DashboardPosts';
import getPosts from '../utils/getPosts';

function DashBoard() {
  const [posts, setPosts] = useState([]);

  useEffect( async () => {
    getPosts()
      .then(res => {
        let data = [];
        data.push(res.data);
        setPosts(data);
      })
      .catch(console.error);
  });

  return (
    <div>
      <Nav  />
      <div style={{marginLeft: 80}}>
        <h2>DashBoard</h2>
        
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          <div style={{width: '20%'}}/>
          <div style={{width: '50%'}}>
            <DashboardPosts 
              feed={posts}
            >
            </DashboardPosts>
          </div>
          {/* <div style={{width: '18%', paddingLeft:'30px'}}>
            <SuggestionList style={{alignSelf: 'flex-end'}}>
            </SuggestionList>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default DashBoard;