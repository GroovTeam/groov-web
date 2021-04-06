/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import  { Tabs, Tab, Paper, Avatar, Box, Button }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PosseList from '../components/PosseList';
import LikesList from '../components/LikesList';
import ListChips from '../components/ListChips';
import SpongeBob from '../components/mockUser.json';
import getProfile from '../utils/getProfile';
import getUserProfile from '../utils/getUserProfile';
import firebase from '../utils/Firebase';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    alignItems: 'center',
  },
}));

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

function EditProfile({user}) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e, newVal) => {
    setPage(newVal);
  };

  const getUserInfo = async () => {
    if (user === undefined) {
      getUserProfile()
        .then(res => {
          setUserInfo(res.data);
          console.log(res.data);
        })
        .catch(console.error);
    }
    console.log(userInfo);
    console.log(firebase.auth().currentUser);

  };

  useEffect(() => {
    getUserInfo();
    console.log(firebase.auth().currentUser);
  }, []);

  return (
    <div>
      <Nav />
      <div style={{display: 'flex', flexDirection: 'column'}}>

        <div>
          <h2>Profile</h2>

          <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <Avatar className={classes.large} src={SpongeBob.profilePic} />
            <h2>{SpongeBob.name}</h2>
            <h3>{SpongeBob.bio}</h3>
          </div>
          <div style={{justifyContent: 'center', display: 'flex'}}>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginLeft: '12vh', marginRight: '12vh'}}>
            <ListChips size={'medium'} chips={SpongeBob.tags} />
          </div>
          <div>
            <Paper style={{alignItems: 'center', display: 'flex', flexDirection: 'column', marginLeft: '12vh', marginRight: '12vh'}} >
              <Tabs
                indicatorColor='primary'
                textColor='primary'
                centered
                value={page}
                onChange={handleChange}
              >
                <Tab centered label='Posse' />
                <Tab centered label='Likes' />
                <Tab centered label='Tracks' />

              </Tabs>
              <TabPanel value={page} index={0}>
                <PosseList data={SpongeBob.posse} />
              </TabPanel>
              <TabPanel value={page} index={1}>
                <LikesList likes={SpongeBob.likes}/>
              </TabPanel>
              <TabPanel value={page} index={2}>
                  list of tracks
                <LikesList likes={SpongeBob.likes}/>
              </TabPanel>
            </Paper>
          </div>
        </div>

      </div>
    </div>
  );
}
  
export default EditProfile;