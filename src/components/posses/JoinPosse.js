import React, {useEffect} from 'react';
import { Button,  List, ListItem, ListItemText, Dialog, DialogContent, DialogTitle, DialogActions  }  from '@material-ui/core';
import joinPosses from '../../utils/joinPosse';

function JoinPosse({posses ,visible, toggle, update, setPopup}) {

  const addPosse = async (posseObj) => {
    
    joinPosses(posseObj)
      .then(() => update())
      .catch(console.error);
    setPopup({open: true, message:'Posse successfully joined'});
  };

  useEffect(async () => {
    update();
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
        <List style={{maxHeight: 400}} >
          {posses.map(posse => (
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