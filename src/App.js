import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Profile from './pages/Profile';
import Nav from './components/Nav';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExploreIcon from '@material-ui/icons/Explore';
import PostAddIcon from '@material-ui/icons/PostAdd';
import TelegramIcon from '@material-ui/icons/Telegram';

function App() {
  const [activeTab, setActiveTab] = useState('DashBoard');
  const active = 'explore';
  const navItems = [
    {name: 'DashBoard', icon: <DashboardIcon />},
    {name: 'Explore', icon: <ExploreIcon />},
    {name: 'Random Suggestion', icon: <TelegramIcon />},
    {name: 'Post', icon: <PostAddIcon />},
    {name: 'Profile', icon: <PersonIcon />}
  ]
  return (
    <div >
      <Nav active={active} items={navItems} />
      {console.log(active)}
    </div>
  );
}


export default App;
