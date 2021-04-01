import React from 'react';
import Nav from '../components/Nav';
import  { Tabs, Tab, Paper, Chip, TextField }  from '@material-ui/core';

// Displays full profile of current user.
// The code in this file is JUST for visual style, as how the website is "supposed" to look.
// Picture = profile pic lol, supposed to span from PROFILE to Picture, thinking of circular, ala IG mobile.
// The idea is having a List to SCROLL that profile's Communities and Likes, handling the switch onClick I assume?
// I know the Chips look cheap, I need to change it's dynamic.

function Profile() {
  return (
    <div>
      <Nav />
      <div style={{marginLeft: 80}}>
        <h2>Profile</h2>
        <TextField label='search for <user>\s tunes..' variant='outlined' style={{marginLeft: 820}} />
        <h1 style={{marginLeft: 400}}>name LastName</h1>
        <h2 style={{marginLeft:350}}>bio, i am a goat and I enjoy music lolo</h2>
        <div>
          PICTURE
          <h1>.</h1>
        </div>


        <Chip label='hip-hop' style={{marginLeft: 50}}/>
        <Chip label='vaporwave' style={{marginLeft: 50}}/>
        <Chip label='leaks' style={{marginLeft: 50}}/>
        <Chip label='unreleased' style={{marginLeft: 50}}/>
        <Chip label='twerking music (6ix9ine)' style={{marginLeft: 50}}/>
        <Chip label='classic' style={{marginLeft: 50}}/>
        <Chip label='reggaeton' style={{marginLeft: 50}}/>
        <Chip label='rap' style={{marginLeft: 50}}/>

        <h1>.</h1>
        <h1>.</h1>
        <div>
          <Paper >
            <Tabs
              indicatorColor='primary'
              textColor='primary'
              centered>

              <Tab label='Jooqs' />
              <Tab label='Communities' />
              <Tab label='Likes' />
            </Tabs>
          </Paper>
        </div>
      </div>
    </div>
  );
}
  
export default Profile;