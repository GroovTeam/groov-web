import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Typography > 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi ratione facilis itaque eum, asperiores veniam et veritatis saepe dolores quod aspernatur atque, voluptate explicabo eos consectetur suscipit beatae iure. 
        </Typography>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi ratione facilis itaque eum, asperiores veniam et veritatis saepe dolores quod aspernatur atque, voluptate explicabo eos consectetur suscipit beatae iure.
        </h4>
      </main>
      
    </div>
  );
  }
  
  export default Profile;
  