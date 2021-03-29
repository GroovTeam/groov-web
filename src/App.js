import './App.css';
import React from 'react';
import { BrowserRouter as 
Router, 
Route, 
Switch, 
} from 'react-router-dom';
import Profile from './pages/Profile';
import Post from './pages/Post';
import RandoSug from './pages/RandoSug';
import Explore from './pages/Explore';
import DashBoard from './pages/DashBoard';
import SpongeBob from './components/mockUser.json';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/profile">
          <Profile data={SpongeBob} />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/randoSug">
          <RandoSug />
        </Route>
        <Route path="/">
          <DashBoard />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
