/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import DashboardPosts from '../components/DashboardPosts';
import SuggestionList from '../components/SuggestionList';
import axios from 'axios';


function DashBoard() {
  const [posts, setPosts] = useState([]);

  useEffect( async () => {
    // Get
    axios.get('http://127.0.0.1:5001/thepoopcrew-528e4/us-central1/api/posts')
      .then(response => {
        const post = response.data;
        setPosts(post);
        console.log('getting fetch ', response.data);
        DashboardPosts(post);
      })
      .catch(error => console.error('Error ', error));
    
    // await DashboardPosts(posts);
    // await console.log('posts: ', posts);
  });

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