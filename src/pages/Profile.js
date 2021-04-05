/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Nav from '../components/Nav';
import  { Tabs, Tab, Paper, Avatar, Box }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PosseList from '../components/PosseList';
import LikesList from '../components/LikesList';
import ListChips from '../components/ListChips';
import SpongeBob from '../components/mockUser.json';
import getProfile from '../utils/getProfile';
import Loading from '../components/Loading';

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

function Profile() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e, newVal) => {
    setPage(newVal);
  };

  const getUserInfo = async () => {
    getProfile()
      .then(res => {
        setUserInfo(res.data);
        setLoading(true);
      })
      .catch(console.error);

    await console.log(userInfo);
  };

  return (
    <div>
      <Nav />
      <div style={{display: 'flex', flexDirection: 'column'}}>

        {loading ? (
          <div>
            <h2>Profile</h2>
            <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
              <Avatar className={classes.large} src={SpongeBob.profilePic} />
              <h1>{SpongeBob.username}</h1>
              <h2>{SpongeBob.name}</h2>
              <h3>{SpongeBob.bio}</h3>
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
        ): <Loading style={{alignSelf: 'center', display: 'flex', marginRight: '2vh', marginTop: '5vh'}} />}

      </div>
    </div>
  );
}
  
export default Profile;