import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as 
Router, 
Route, 
Switch, 
} from 'react-router-dom';
import ProfilePath from './pages/ProfilePath';
import PosseProfilePath from './pages/PosseProfilePath';
import Post from './pages/Post';
import RandoSug from './pages/RandoSug';
import DashBoard from './pages/DashBoard';
import Register from './pages/Register';
import Login from './pages/LoginPage';

const App = () => {

  const [user, setUser] = useState(undefined);
  const [posse, setPosse] = useState(undefined);

  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <DashBoard setUser={setUser} setPosse={setPosse}/>
        </Route>
        <Route path="/profile">
          <ProfilePath user={user} setUser={setUser}/>
        </Route>
        <Route path="/posseProfile">
          <PosseProfilePath posse={posse} setPosse={setPosse}/>
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/randoSug">
          <RandoSug />
        </Route>
        <Route path="/" >
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};


export default App;
