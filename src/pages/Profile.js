import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../components/Nav';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

function Profile() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    
    <div>
      <Nav />
      <div style={{marginLeft: 80}}>
            <h2>Profile</h2>
      </div>
      
    </div>
  );
  }
  
  export default Profile;
  