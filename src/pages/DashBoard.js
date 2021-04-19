import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import firebase from '../utils/Firebase';
import DashboardPosts from '../components/DashboardPosts';
import { List, ListSubheader, Paper, CircularProgress, ButtonGroup, Button}  from '@material-ui/core';
import getAllPosts from '../utils/getAllPosts';
import MakePost from '../components/MakePost';
import getUserProfile from '../utils/getUserProfile';
import getFeed from '../utils/getFeed';

function DashBoard({setUser}) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  console.log(posts);

  const updateFeed = () => {
    getUserProfile()
      .then(user => {
        getFeed()
          .then(res => {
            console.log('updating feed');
            if (res.data) {
              let newData = [];
              for (const key in Object.keys(res.data.results)) {
                res.data.results[key].image = 'https://picsum.photos/200/300';
                res.data.results[key].alreadyLiked = res.data.results[key].likes ? (res.data.results[key].likes.includes(user.data.username)) : false;
                newData.push(res.data.results[key]);
              }
              setPosts(newData);
            }
            setLoading(false);
          })
          .catch(console.error);
      })
      .catch(console.error);
  };

  const handleGetAllPost = () => {
    getUserProfile()
      .then(user => {
        getAllPosts()
          .then(res => {
            console.log('updating feed');
            if (res.data) {
              let newData = [];
              for (const key in Object.keys(res.data.results)) {
                res.data.results[key].image = 'https://picsum.photos/200/300';
                res.data.results[key].alreadyLiked = res.data.results[key].likes ? (res.data.results[key].likes.includes(user.data.username)) : false;
                newData.push(res.data.results[key]);
              }
              setPosts(newData);
            }
            setLoading(false);
          })
          .catch(console.error);
      })
      .catch(console.error);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const onAuthStateChanged = (user) => {
    // Check if the user has verified their email.
    if (user) 
      updateFeed();
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(onAuthStateChanged);
    updateFeed();
  },[]);

  return (
    <div>
      <Nav  />
      <div style={{margin: '12vh'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {loading ? <CircularProgress /> : (
            <Paper 
              variant={'outlined'}

              style={{width: '150vh'}}
            >
              <List subheader={<ListSubheader />}>
                <ListSubheader 
                  style={{backgroundColor: 'white', top: 60}}
                >
                  <div 
                    style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
                  >
                    <span onClick={() => scrollToTop()} >DashBoard</span>
                    <ButtonGroup>
                      <Button onClick={updateFeed}>Posses</Button>
                      <Button onClick={handleGetAllPost}>All Posts</Button>
                    </ButtonGroup>
                    <MakePost   
                      updateFeed={updateFeed} 
                    />
                  </div>
                </ListSubheader>
                <DashboardPosts 
                  feed={posts} 
                  setUser={setUser}
                >
                </DashboardPosts>
              </List>
                
            </Paper>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default DashBoard;