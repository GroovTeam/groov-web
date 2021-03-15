import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Profile from '../pages/Profile';
import Post from '../pages/Post';
import RandoSug from '../pages/RandoSug';
import Explore from '../pages/Explore';
import DashBoard from '../pages/DashBoard';




const drawerWidth = 240;

// const theme = createMuiTheme({
//   palette: {
//     primary: ''
//   }
// });

const active = '';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}));

export default function Nav({items, active}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currPage, setCurrPage] = React.useState('DashBoard');
  const navRoutes = [
    {pathName: 'DashBoard', route: <DashBoard />},
    {pathName: 'Explore', route: <Explore />},
    {pathName: 'Random Suggestion', route: <RandoSug />},
    {pathName: 'Post', route: <Post />},
    {pathName: 'Profile', route: <Profile />}
  ]

  const handleNavOpen = () => {
    setOpen(true);
  };

  const handleNavClose = () => {
    setOpen(false);
  };

  const currentPage = (el) => {
    console.log(el.name);
    setCurrPage(el.name);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar 
        style={{ background: '#2b2929' }}
        position="sticky"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleNavOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Music App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleNavClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        {items.map(({name, icon}) => (
        <List>
          <ListItem button key={name}
            onClick={() => {setCurrPage(name)}}
          >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name}/>
          <Router>
            <Route />
            {navRoutes.map(({path, routes}) => {
              if (path == currPage)
                return routes;
            })}
          </Router>
          </ListItem>
        </List>
        ))}
        {/* <List>
          <ListItem button key={'DashBoard'}
            onClick = {() => props.active = 'DashBoard'}
          >
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary={'DashBoard'} />
          </ListItem>
        </List>
        <List>
          <ListItem button key={'Explore'}
            onClick = {() => props.active = 'Explore'}
          >
              <ListItemIcon><ExploreIcon /></ListItemIcon>
              <ListItemText primary={'Explore'} />
          </ListItem>
        </List>
        <List>
          <ListItem 
            button key={'Random Suggestion'}
            onClick = {() => props.active = 'Random Suggestion'}
          >
              <ListItemIcon><TelegramIcon /></ListItemIcon>
              <ListItemText primary={'Random Suggestion'} />
          </ListItem>
        </List>
        <List>
          <ListItem 
            button key={'Post'}
            onClick = {() => props.active = 'Post'}  
          >
              <ListItemIcon><PostAddIcon /></ListItemIcon>
              <ListItemText primary={'Post'} />
          </ListItem>
        </List>
        <List>
          <ListItem 
            button key={'profile'}
            onClick = {() => props.active = 'Profile'}
          >
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText primary={'Profile'} />
          </ListItem>
        </List> */}
      </Drawer>
    </div>
  );

  activeTabs();
}

function activeTabs() {
  return (
    <div>
      <h1>adsaasdfasdfasdfsadfasdsdsdfsad</h1>
      {console.log(active)}
    </div>
  )
}
