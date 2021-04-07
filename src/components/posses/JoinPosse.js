/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { Button,  List, ListItem, ListItemText, 
  Paper, Dialog, DialogContent, DialogTitle, DialogActions  }  from '@material-ui/core';
import joinPosses from '../../utils/joinPosse';
import getPosses from '../../utils/getPosses';

function JoinPosse({visible, toggle}) {
  const [allPosses, setAllPosses] = useState([]);

  const getAllPosses = async () => {
    let getRes = [];
    getPosses()
      .then(res => {
        console.log(res.data);
        getRes = res.data.results;
        setAllPosses(getRes);
      })
      .catch(console.error);
  };

  const addPosse = (posseObj) => {
    console.log('we want to add this posse', posseObj.name);
    console.log(posseObj);
    joinPosses(posseObj)
      .catch(console.error);
  };

  useEffect(async () => {
    getAllPosses();
  }, []);

  return (
    <Dialog
      open={visible}
      onClose={toggle}
      maxWidth='md'
      fullWidth={true}
    >
      <DialogTitle id="alert-dialog-title">Join Posses</DialogTitle>
      <DialogContent>
        <List style={{maxHeight: 400}}>
          {allPosses.map(posse => (
            <ListItem key={posse.name}>
              <ListItemText primary={posse.name} />
              <Button style={{ color: 'green' }} onClick={() => addPosse(posse)}>
                Join
              </Button>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => toggle()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default JoinPosse;