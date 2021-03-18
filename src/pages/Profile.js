import React from 'react';
import Nav from '../components/Nav';
// import Button from '@material-ui/core/Button';
import { Chip } from '@material-ui/core';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { Paper } from '@material-ui/core';

// Displays full profile of current user, along with likes(?)

// The code in this file is JUST for visual style, as how the website is "supposed" to look.
// Picture = profile pic lol
// The idea is having a List to SCROLL that profile's Communities and Likes.
// I assume the user's liked genres are stored in some sort of array? Need to know how to work it dynamically.

function Profile() {
  return (
    <div>
      <Nav />
      <div style={{marginLeft: 80}}>
        <h2>Profile</h2>
        <h1 style={{marginLeft: 400}}>name LastName</h1>
        <h2 style={{marginLeft:350}}>bio, i am a goat and I enjoy music lolo</h2>
        <div>
          PICTURE
          <h1>.</h1>
        </div>


        <Chip label="hip-hop" style={{marginLeft: 50}}/>
        <Chip label="vaporwave" style={{marginLeft: 50}}/>
        <Chip label="leaks" style={{marginLeft: 50}}/>
        <Chip label="unreleased" style={{marginLeft: 50}}/>
        <Chip label="twerking music (6ix9ine)" style={{marginLeft: 50}}/>
        <Chip label="classic" style={{marginLeft: 50}}/>
        <Chip label="reggaeton" style={{marginLeft: 50}}/>
        <Chip label="rap" style={{marginLeft: 50}}/>

        <h1>.</h1>
        <h1>.</h1>
        <div>
          <Paper >
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              centered>

              <Tab label="Communities" />
              <Tab label="Likes" />
            </Tabs>
          </Paper>
        </div>
      </div>
    </div>
  );
}
  
export default Profile;