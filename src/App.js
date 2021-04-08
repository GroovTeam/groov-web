import './App.css';
import React from 'react';
import { BrowserRouter as 
Router, 
Route, 
Switch, 
} from 'react-router-dom';
import ProfilePath from './pages/ProfilePath';
import Post from './pages/Post';
import RandoSug from './pages/RandoSug';
import Explore from './pages/Explore';
import DashBoard from './pages/DashBoard';
import Register from './pages/Register';
import Login from './pages/LoginPage';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/profile">
          <ProfilePath />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login" >
          <Login />
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
