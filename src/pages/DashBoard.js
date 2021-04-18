/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import DashboardPosts from '../components/DashboardPosts';
import  { Toolbar, Tabs, Tab, Select, List, ListSubheader, Paper, Button, Box, AppBar }  from '@material-ui/core';
import getAllPosts from '../utils/getAllPosts';
import MakePost from '../components/MakePost';
import getUserProfile from '../utils/getUserProfile';

function TabPanel(data) {
  const {children, value, index} = data;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <h4>{children}</h4>
        </Box>
      )}
    </div>
  );
}

function DashBoard() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);

  const handleChange = (newVal) => {
    setPage(newVal);
  };

  const updateFeed = () => {
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

  useEffect(async () => {
    updateFeed();
  }, []);

  return (
    <div>
      <Nav  />
      <div style={{margin: '12vh'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div >
            <Paper 
              variant={'outlined'}
            >
              {/* <Tabs
                indicatorColor='none'
                textColor='primary'
                centered
                value={page}
                onChange={handleChange}
                style={{display: 'flex', alignItems: 'center', position: 'fixed',
                  backgroundColor: 'grey', width: '100%', opacity: '100%'}}
              >
                <Tab 
                  label='DashBoard'
                  disableRipple={true}
                  style={{backgroundColor: 'white'}}
                />
                <MakePost   
                  updateFeed={updateFeed} 
                />
              </Tabs> */}
              {/* <TabPanel label='Dashboard' value={page} index={0}>
                
                
              </TabPanel> */}
              <List subheader={<ListSubheader />}>
                <ListSubheader 
                  style={{backgroundColor: 'white', top: 60}}
                >
                  <div 
                    style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
                  >
                    <span onClick={() => scrollToTop()} >DashBoard</span>
\                    <MakePost   
                      updateFeed={updateFeed} 
                    />
                  </div>
                </ListSubheader>
                <DashboardPosts 
                  feed={posts} 
                >
                </DashboardPosts>
              </List>
              
            </Paper>
          </div>
          
        </div>
        
        
      </div>
      
    </div>
  );
}

export default DashBoard;