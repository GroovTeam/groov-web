/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { Button,  List, ListItem, ListItemText, 
  Paper, Dialog, DialogContent, DialogTitle  }  from '@material-ui/core';
import joinPosses from '../utils/joinPosse';
import createPosse from '../utils/createPosse';
import removePosses from '../utils/removePosses';
import CreatePosse from './posses/CreatePosses';
import JoinPosse from './posses/JoinPosse';


export default function UserPosses({userPosses}) {
  const [checked, setChecked] = useState([]);
  const [posses, setPosses] = useState((userPosses === undefined) ? [] : userPosses);
  const [openCreate, setOpenCreate] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);


  const updatePosses = () => {

  };

  const joinPosses = () => {

  };

  const createPosses = () => {

  };


  const handleClickOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
  };

  const handleClickOpenJoin = () => {
    setOpenJoin(true);
  };

  const handleCloseJoin = () => {
    setOpenJoin(false);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    console.log(checked);
  };

  const removePosses = async (posseEl) => {
    console.log('we want to remove this posse', posseEl.id);
    console.log('we want to remove ', posseEl.name);
  };

  useEffect( async() => {
    let tempTags = [];
    let userTags = (userPosses === undefined) ? [] : userPosses;
    userTags.forEach((el) => {
      tempTags.push(el);
    });
    setChecked(tempTags);
  }, []);
  
  return (
    <div>
      <List>
        {(posses.length !== 0) ? (posses.map((value) => {
          return (
            <ListItem style={{width: '55vh'}} key={value.posseID} onClick={handleToggle(value)}>
              <ListItemText  primary={value.name} />
              <Button style={{ color: 'red' }} onClick={removePosses(value)}>
                      Remove
              </Button>
            </ListItem>
          );
        })) : <ListItemText  primary={'Create or Join some posses. It\'s feeling a little empty here.'} /> }
      </List>
      <Button onClick={() => handleClickOpenJoin()}>
            Join Posses
      </Button>
      <Button onClick={() => handleClickOpenCreate()}>
            Create Posse
      </Button>
      <Button onClick={() => updatePosses(checked)}>
            Update Posses
      </Button>

      <CreatePosse visible={openCreate} toggle={handleCloseCreate} />
      <JoinPosse visible={openJoin} toggle={handleCloseJoin} />
    </div>
  );
}