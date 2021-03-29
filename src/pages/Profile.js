/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Nav from '../components/Nav';
import  { Tabs, Tab, Paper, Chip, TextField, Avatar, Box }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PosseList from '../components/PosseList';
import LikesList from '../components/LikesList';

// Displays full profile of current user.
// The code in this file is JUST for visual style, as how the website is "supposed" to look.
// Picture = profile pic lol, supposed to span from PROFILE to Picture, thinking of circular, ala IG mobile.
// The idea is having a List to SCROLL that profile's Communities and Likes, handling the switch onClick I assume?
// I know the Chips look cheap, I need to change it's dynamic.

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

function Profile({data}) {
  const classes = useStyles();
  const [page, setPage] = useState(0);

  const handleChange = (e, newVal) => {
    setPage(newVal);
  };

  return (
    <div>
      <Nav />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h2>Profile</h2>
        <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
          <Avatar className={classes.large} src={data.profilePic} />
          <h1>{data.username}</h1>
          <h2>{data.name}</h2>
          <h3>{data.bio}</h3>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginLeft: '12vh', marginRight: '12vh'}}>
          {data.tags.map((tag, index) => (
            <Chip style={{margin: '1vh'}} key={index} label={tag} />
          ))}
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
            </Tabs>
            <TabPanel value={page} index={0}>
              <PosseList data={data.posse} />
            </TabPanel>
            <TabPanel value={page} index={1}>
              <LikesList likes={data.likes}/>
            </TabPanel>
          </Paper>
        </div>
      </div>
    </div>
  );
}
  
export default Profile;