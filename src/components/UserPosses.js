/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { Avatar, Button, IconButton, List, ListItem, ListItemText, Tooltip }  from '@material-ui/core';
import getUserProfile from '../utils/getUserProfile';
import removePosses from '../utils/removePosses';
import CreatePosse from './posses/CreatePosses';
import JoinPosse from './posses/JoinPosse';
import getPosses from '../utils/getPosses';
import ClearIcon from '@material-ui/icons/Clear';

export default function UserPosses({setPopup}) {
  const [posses, setPosses] = useState([]);
  const [openCreate, setOpenCreate] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);
  const [allPosses, setAllPosses] = useState([]);
  const [hoverColor, setHoverColor] = useState('#fafafa');

  const handleClickOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
    getUserPosses();
  };

  const handleClickOpenJoin = () => {
    setOpenJoin(true);
    getUserPosses();
  };

  const handleCloseJoin = () => {
    setOpenJoin(false);
  };

  const handleRemovePosses = (value) => async () => {
    const posseIndex = posses.indexOf(value);
    const posseList = [...posses];
    if (posseIndex > -1) {
      posseList.splice(posseIndex, 1);
    }

    console.log(value.name);
    const removeId = value.posseID;

    removePosses(removeId)
      .then(() => {getUserPosses(); 
        setPosses(posseList);})
      .catch(console.error);
  };

  const getUserPosses = async () => {
    let data = {};
    getUserProfile()
      .then(res => {
        data = res.data;
        setPosses(data.possesData);
        getAllPosses();
      })
      .catch(console.error);
  };

  const getAllPosses = async () => {
    let getRes = [];
    getPosses()
      .then(res => {
        getRes = res.data.results;
        setAllPosses(getRes);
      })
      .catch(console.error);
  };

  useEffect( () => {
    getUserPosses();
  }, []);
  
  return (
    <div>
      <List>
        {(posses !== undefined && posses.length) ? (posses.map((value) => 
          (<ListItem divider key={value.posseID}>
            <Avatar variant="square" src='https://picsum.photos/200/300'></Avatar>
            <ListItemText style={{marginLeft: '1vh'}} primary={value.name} />
            <Tooltip title='Remove Posse' >
              <IconButton style={{ color: 'red' }} onClick={handleRemovePosses(value)}>
                <ClearIcon></ClearIcon>
              </IconButton>
            </Tooltip>
          </ListItem>)
        )) : <ListItemText  primary={'Create or Join some posses. It\'s feeling a little empty here.'} /> }
      </List>
      <Button onClick={() => handleClickOpenJoin()}>
            Join Posses
      </Button>
      <Button onClick={() => handleClickOpenCreate()}>
            Create Posse
      </Button>

      <CreatePosse update={getAllPosses} visible={openCreate} toggle={handleCloseCreate} setPopup={setPopup}/>
      <JoinPosse posses={allPosses} update={getUserPosses} visible={openJoin} toggle={handleCloseJoin} setPopup={setPopup}/>
    </div>
  );
}