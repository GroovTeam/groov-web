import React, {useState, useEffect} from 'react';
import { Button,  List, ListItem, ListItemText }  from '@material-ui/core';
import getUserProfile from '../utils/getUserProfile';
import removePosses from '../utils/removePosses';
import CreatePosse from './posses/CreatePosses';
import JoinPosse from './posses/JoinPosse';
import getPosses from '../utils/getPosses';

export default function UserPosses() {
  const [posses, setPosses] = useState([]);
  const [openCreate, setOpenCreate] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);
  const [allPosses, setAllPosses] = useState([]);

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

    // let removeId = '';

    // allPosses.forEach(posse => {
    //   if (posse.name.toLowerCase() === value.toLowerCase()) {
    //     removeId = posse.posseID;
    //   }
    // });
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
        setPosses(data.posses);
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
        {(posses !== undefined) ? (posses.map((value) => {
          return (
            <ListItem key={value.name}>
              <ListItemText  primary={value} />
              <Button style={{ color: 'red' }} onClick={handleRemovePosses(value)}>
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

      <CreatePosse update={getAllPosses} visible={openCreate} toggle={handleCloseCreate} />
      <JoinPosse posses={allPosses} update={getUserPosses} visible={openJoin} toggle={handleCloseJoin} />
    </div>
  );
}