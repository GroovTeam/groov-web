import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import DashboardPosts from '../components/DashboardPosts';
import  { Tabs, Tab, Paper, Box }  from '@material-ui/core';
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

function DashBoard({setUser}) {
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

  useEffect(async () => {
    updateFeed();
  }, []);

  return (
    <div>
      <Nav  />
      <div style={{margin: '8vh'}}>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
          <div >
            <Paper 
              variant={'outlined'}
            >
              <Tabs
                indicatorColor='none'
                textColor='primary'
                centered
                value={page}
                onChange={handleChange}
              >
                <Tab 
                  label='DashBoard'
                  disableRipple={true}
                  disabled
                />
              </Tabs>
              
              <TabPanel value={page} index={0}>
                <DashboardPosts 
                  feed={posts} 
                  setUser={setUser}
                >
                </DashboardPosts>
                <MakePost   
                  updateFeed={updateFeed} 
                />
              </TabPanel>
            </Paper>
          </div>
          
        </div>
        <div style={{display: 'flex', alignItems: 'flex-end'}}>
          
        </div>
        
      </div>
    </div>
  );
}

export default DashBoard;