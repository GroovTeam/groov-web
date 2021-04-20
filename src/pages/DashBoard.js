import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import firebase from '../utils/Firebase';
import DashboardPosts from '../components/DashboardPosts';
import { List, ListSubheader, Paper, CircularProgress, Tooltip}  from '@material-ui/core';
import getAllPosts from '../utils/getAllPosts';
import MakePost from '../components/MakePost';
import getUserProfile from '../utils/getUserProfile';
import getFeed from '../utils/getFeed';
import '../styling/DashBoard.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import FavoriteIcon from '@material-ui/icons/Favorite';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#192bc2'
    }
  }
});


function DashBoard({setUser}) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [feedLoading, setFeedLoading] = useState(true);
  console.log(posts);

  const updateFeed = () => {
    setFeedLoading(true);
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
            setFeedLoading(false);
          })
          .catch(console.error);
      })
      .catch(console.error);
    setToggle(!toggle);
  };

  const handleGetAllPost = () => {
    setFeedLoading(true);
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
            setFeedLoading(false);
          })
          .catch(console.error);
      })
      .catch(console.error);
    setToggle(!toggle);

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
    <div >
      <Nav  />
      <div className='OuterContainer' >
        <div className='InnerContainer'>
          {loading ? <CircularProgress /> : (
            <Paper 
              variant={'outlined'}
              className='PaperContainer'
            >
              <List subheader={<ListSubheader />}>
                <ListSubheader 
                  className='SubHeader'
                  style={{top: 60, backgroundColor: '#FFFFFF', borderBottom: '1px solid black'}}
                >
                  <div 
                    className='ButtonContainer'
                  >
                    <ThemeProvider theme={theme} >
                      {/* <ButtonGroup className='ButtonGroup' color='primary'>
                        <Button onClick={updateFeed}>Posses</Button>
                        <Button onClick={handleGetAllPost}>All Posts</Button>
                      </ButtonGroup> */}
                      <span style={{color: '#192bc2', fontSize: 20}}>
                        {toggle ? (
                          <div>
                            <Tooltip title='Update dashboard with only followed posses'>
                              <FavoriteIcon onClick={updateFeed} /> 
                            </Tooltip>
                          </div>
                          
                        ) : 
                          (
                            <div>
                              <Tooltip title='Update dashboard with all of the most recent posts made'>
                                <NewReleasesIcon onClick={handleGetAllPost} /> 
                              </Tooltip>
                            </div>
                          )}
                      </span>

                    </ThemeProvider>
                    <span style={{color: '#192bc2', fontSize: 20}} onClick={() => scrollToTop()} >DashBoard</span>
                    <MakePost   
                      updateFeed={updateFeed} 
                    />
                    
                  </div>
                </ListSubheader>
                {feedLoading ? <CircularProgress style={{display: 'flex', justifyContent: 'center', width: '100%'}} /> : <DashboardPosts 
                  feed={posts} 
                  setUser={setUser}
                >
                </DashboardPosts>}
                
              </List>
                
            </Paper>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;