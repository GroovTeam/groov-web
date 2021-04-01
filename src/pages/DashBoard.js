/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import DashboardPosts from '../components/DashboardPosts';
import  { Tabs, Tab, Paper, Box }  from '@material-ui/core';
import getPosts from '../utils/getPosts';
import getAllPosts from '../utils/getAllPosts';
import MakePost from '../components/MakePost';
import LikesList from '../components/LikesList';

let postsMock = [{image: 'https://picsum.photos/200/300', tags: ['metal', 'rock'], posses: ['noobs'], content: 'ay yall listen to this new track', username: 'crakatoa'}, 
  {image: 'https://picsum.photos/200', tags: ['metal', 'rock'], posses: ['noobs'], content: 'ay yall listen to this new track', username: 'crakatoa'}, 
  {image: 'https://picsum.photos/200/300', tags: ['metal', 'rock'], posses: ['noobs'], content: 'ay yall listen to this new track', username: 'crakatoa'}];

let likes= ['pop', 'metal', 'Ghost Stories Dubbed not Subbed', 'Jujutsu Kaisen', 'Attack on Titan', 'ReZero', 'Jojo Bizarre Adventure'];
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

  const handleChange = (e, newVal) => {
    setPage(newVal);
  };

  const updateFeed = () => {
    console.log('updating feeed');
    getAllPosts()
      .then(res => {
        if (res.data) {
          let newData = [];
          console.log(res.data.results);
          for (const key in Object.keys(res.data.results)) {
            res.data.results[key].image = 'https://picsum.photos/200/300';
            console.log(res.data.result);
            newData.push(res.data.results[key]);
          }
          console.log(newData);
          setPosts(newData);
        }
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (posts.length === 0) {
      setPosts(postsMock);
    }
    updateFeed();
  }, []);

  return (
    <div>
      <Nav  />
      <div style={{margin: '5vh'}}>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
          <div style={{width: '50%', margin: '5vh'}}>
            <Paper 
              variant={'outlined'}
            >
              <Tabs
                indicatorColor='primary'
                textColor='primary'
                centered
                value={page}
                onChange={handleChange}
              >
                <Tab 
                  centered 
                  label='DashBoard'
                  disableRipple={true}
                />
              </Tabs>
              <TabPanel value={page} index={0}>
                <DashboardPosts 
                  feed={posts}
                >
                </DashboardPosts>
              </TabPanel>
            </Paper>
          </div>
          <div style={{width: '20%', margin: '5vh', justifySelf: 'flex-end'}}>
            <Paper 
              variant={'outlined'}
            >
              <Tabs
                indicatorColor='primary'
                textColor='primary'
                centered
                value={page}
                onChange={handleChange}
              >
                <Tab 
                  centered 
                  label='Suggestions'
                  disableRipple={true}
                />
              </Tabs>
              <TabPanel value={page} index={0}>
                <LikesList likes={likes} />
              </TabPanel>
            </Paper>
          </div>
          
        </div>
        <div style={{display: 'flex', alignItems: 'flex-end'}}>
          <MakePost style={{alignSelf: 'flex-end'}} updateFeed={updateFeed} />
        </div>
        
      </div>
    </div>
  );
}

export default DashBoard;